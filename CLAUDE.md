# CLAUDE.md

이 파일은 이 저장소에서 작업하는 Claude(및 사람 기여자)를 위한 프로젝트 규칙이다.
**여기 적힌 규칙은 편의보다 우선한다.** 규칙과 충돌하는 요청을 받으면 코드를 쓰기 전에 먼저 알린다.

---

## 1. 프로젝트 개요

출판사와 무관하게 신간 도서 정보를 모아 보여주는 웹사이트. 회사 소개와 문의 접수 창구를 함께 제공한다.

- 방문자: 비로그인. 신간 목록/검색/상세 열람, 문의 폼 제출
- 운영자: 로그인. 도서 CRUD, 문의 처리, 회사 소개 편집
- 상세 요구사항은 `docs/PRD.md` 참조. **PRD의 기술 스택 섹션(10장)은 본 문서로 대체된다.**

---

## 2. 기술 스택

| Layer | 기술 |
|-------|------|
| Framework | Next.js (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| DB / Auth / Storage | Supabase |
| Deploy | Vercel |

- 새 라이브러리 추가는 **먼저 제안하고 승인받는다.** 위 스택으로 해결 가능하면 추가하지 않는다.
- Pages Router 코드는 작성하지 않는다. App Router만 사용한다.

---

## 3. 디렉터리 구조

```
src/
  app/
    (public)/          # 공개 화면: /, /books, /books/[slug], /about, /contact
    admin/             # 운영자 화면 (인증 필수)
    api/               # Route Handlers
  components/
    ui/                # 범용 프리미티브 (Button, Input ...)
    books/             # 도메인 단위 컴포넌트
  lib/
    supabase/          # 클라이언트 팩토리 (browser / server / admin)
    data/              # ★ 데이터 접근 계층 — 아래 4장
    validation/        # Zod 스키마
    utils/
  types/               # 공유 타입, DB 생성 타입
supabase/
  migrations/          # SQL 마이그레이션 (RLS 정책 포함)
docs/
  PRD.md
```

---

## 4. 데이터 접근 규칙 (최우선)

**모든 데이터 접근은 `src/lib/data/*` 를 통해서만 한다.**

- `src/lib/data/` 밖에서 `supabase.from(...)`, `.rpc(...)`, raw SQL을 직접 호출하지 않는다.
  - 금지 위치: `app/**`(page, layout, route handler, server action), `components/**`, `hooks/**`
- 컴포넌트와 Route Handler는 `getPublishedBooks()`, `createInquiry()` 같은 **의도가 드러나는 함수만** 호출한다.
- 파일은 엔티티 단위로 나눈다: `lib/data/books.ts`, `lib/data/inquiries.ts`, `lib/data/pages.ts`, `lib/data/admin-users.ts`
- 데이터 계층 함수는:
  1. 인자를 Zod로 검증하고 (`lib/validation`)
  2. Supabase를 호출하고
  3. **DB 행(snake_case)을 앱 도메인 타입(camelCase)으로 변환해** 반환한다.
  - snake_case 필드가 계층 밖으로 새어 나가면 안 된다.
- 에러는 계층 안에서 처리한다. Supabase 원본 에러 객체를 그대로 위로 던지지 않는다.

```ts
// ✅ src/lib/data/books.ts
export async function getPublishedBooks(params: BookListParams): Promise<BookSummary[]> { ... }

// ✅ src/app/(public)/books/page.tsx
const books = await getPublishedBooks({ page: 1 });

// ❌ 컴포넌트/페이지/라우트에서 직접 호출
const { data } = await supabase.from('books').select('*');
```

---

## 5. 보안

### 5.1 시크릿
- **`.env*` 는 절대 커밋하지 않는다.** `.env.example` 만 커밋하며 값은 빈 문자열로 둔다.
- 키·토큰·비밀번호·접속 문자열을 코드, 주석, 테스트, 로그, 커밋 메시지, 문서에 **하드코딩하지 않는다.**
- 커밋 전 `git diff --staged` 로 시크릿 유입 여부를 확인한다. 발견 시 커밋을 중단하고 알린다.
- 클라이언트 노출 허용: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` 만.
- `SUPABASE_SERVICE_ROLE_KEY` 는 **서버 전용**이다. `NEXT_PUBLIC_` 접두사를 붙이지 않으며, `lib/supabase/admin.ts` 밖에서 참조하지 않는다.
- 실제 시크릿 값이 필요한 작업(배포 설정, 키 발급/교체)은 Claude가 직접 하지 않는다. 사람이 처리하도록 안내한다.

### 5.2 RLS
- **모든 Supabase 테이블은 RLS를 켠다.** 예외 없음. RLS 없이 테이블을 만들지 않는다.
- 테이블 생성 마이그레이션에는 `ENABLE ROW LEVEL SECURITY` 와 정책이 **같은 파일에** 포함되어야 한다.
- 기본 원칙: **거부가 기본, 허용은 명시.**
  - 공개 읽기: `books`, `publishers`, `authors`, `categories`, `pages` 등은 `status = 'published'` 인 행만 anon 읽기 허용
  - `inquiries`: anon은 **INSERT만** 허용. SELECT/UPDATE/DELETE는 운영자만
  - `admin_users`, `inquiry_logs`: anon 접근 전면 차단
- RLS 우회를 위해 service role 키를 쓰지 않는다. 우회가 필요해 보이면 정책 설계를 다시 검토하고 먼저 알린다.

### 5.3 입력·출력
- 외부 입력(폼, 쿼리스트링, Route Handler body)은 **경계에서 Zod로 검증**한다.
- 문의 폼은 캡차 검증 → rate limit 확인 → 저장 순서를 지킨다.
- 사용자 입력을 `dangerouslySetInnerHTML` 로 렌더하지 않는다. 필요 시 sanitize를 거친다.
- 에러 응답에 스택 트레이스나 DB 스키마 정보를 담지 않는다.

---

## 6. 언어 규칙

- **화면에 보이는 모든 카피는 한국어**: 버튼, 라벨, 안내, 에러 메시지, 이메일 본문, 메타 태그, `alt` 텍스트, 빈 상태 문구.
  - 존댓말·평서체 유지. "~해주세요" 톤.
  - 예: `"검색 결과가 없습니다"`, `"문의가 접수되었습니다"`
- **코드 식별자는 모두 영어**: 변수, 함수, 컴포넌트, 파일명, 타입, DB 컬럼, CSS 클래스, 커밋 메시지.
  - ❌ `const 도서목록 = ...` / `function 문의보내기()`
  - ✅ `const bookList = ...` / `function submitInquiry()`
- 코드 주석은 한국어 허용. 다만 주석보다 이름을 명확히 짓는 쪽을 우선한다.
- 하드코딩된 한국어 카피는 컴포넌트 안에 두지 말고 `lib/constants/messages.ts` 로 모은다. (MVP는 i18n 라이브러리 미도입)

---

## 7. 코드 컨벤션

| 대상 | 규칙 | 예 |
|------|------|-----|
| 파일·폴더 | kebab-case | `book-card.tsx` |
| 컴포넌트 | PascalCase | `BookCard` |
| 변수·함수 | camelCase | `getPublishedBooks` |
| 상수 | UPPER_SNAKE_CASE | `MAX_PAGE_SIZE` |
| 타입·인터페이스 | PascalCase | `BookSummary` |
| DB 테이블·컬럼 | snake_case | `published_at` |

- TypeScript strict 모드. **`any` 금지**, 타입 단언(`as`)은 최소화하고 쓸 땐 이유를 주석으로 남긴다.
- 서버 컴포넌트가 기본. `'use client'` 는 상호작용이 실제로 필요한 컴포넌트에만 붙인다.
- 공개 페이지는 SEO가 중요하다. 도서 상세는 ISR로 생성하고 `generateMetadata` 를 구현한다.
- Tailwind 유틸리티를 직접 쓴다. 별도 CSS 파일은 만들지 않는다. 조건부 클래스는 `cn()` 헬퍼 사용.
- 이미지는 `next/image` 를 쓴다. `<img>` 직접 사용 금지.
- 컴포넌트가 200줄을 넘으면 분리를 검토한다.

---

## 8. 명령어

```bash
pnpm dev          # 개발 서버
pnpm build        # 프로덕션 빌드
pnpm lint         # ESLint
pnpm typecheck    # tsc --noEmit
pnpm test         # 테스트
```

- **작업 완료를 보고하기 전에 `pnpm typecheck` 와 `pnpm lint` 를 통과시킨다.**
- 스키마를 바꾸면 `supabase/migrations/` 에 SQL 마이그레이션을 추가하고 `types/database.ts` 를 재생성한다. 대시보드에서 스키마를 직접 고치지 않는다.

---

## 9. Git

- 커밋 메시지: Conventional Commits, 영어. `feat: add book search filter`
- 브랜치: `feat/`, `fix/`, `chore/` + 영어 kebab-case
- 커밋 단위는 작게. 관련 없는 변경을 섞지 않는다.
- `main` 에 직접 푸시하지 않는다. Vercel이 `main` 을 프로덕션에 배포한다.
- 커밋·푸시는 사람의 요청이 있을 때만 한다. 임의로 하지 않는다.

---

## 10. 작업 시 지켜야 할 것

- 요구사항이 모호하면 **추측해서 구현하지 말고 먼저 묻는다.** 특히 데이터 모델과 권한이 걸린 부분.
- 요청받지 않은 기능을 덧붙이지 않는다. PRD의 Won't Have(판매·결제, 전자책 뷰어, 일반 회원가입, 실시간 채팅)는 범위 밖이다.
- 기존 코드를 수정할 땐 주변 패턴을 먼저 읽고 맞춘다.
- 파일을 새로 만들기 전에 기존 파일에 들어갈 자리가 있는지 확인한다.
- 문서(`*.md`)는 요청이 있을 때만 만든다.
- 다음은 코드를 쓰기 전에 **반드시 확인을 받는다**: 스키마 변경, RLS 정책 변경, 의존성 추가, 데이터 삭제, 인증 로직 변경.
