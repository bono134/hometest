# PRD: 신간 도서 정보 홈페이지 (가칭: 신간모아 / BookNow)

| 항목 | 내용 |
|------|------|
| 문서 버전 | v0.1 (초안) |
| 작성일 | 2026-07-16 |
| 상태 | 검토 대기 |
| 범위 | 회사 소개 + 신규 도서 정보 제공 + 문의 접수 웹사이트 (MVP) |

> **전제(확인 필요)**
> 1. 본 문서는 "출판사와 무관하게 신간 도서 정보를 모아 보여주는 사이트"를 중심 축으로, 이를 운영하는 회사의 **회사 소개**와 **문의 접수** 기능을 함께 담은 하나의 홈페이지로 해석했습니다.
> 2. 도서 정보 등록은 **운영자(에디터)만 가능**하고, 일반 방문자는 **열람 + 문의**만 하는 구조로 가정했습니다. (일반 사용자가 직접 도서를 올리는 UGC 모델이라면 회원가입·검수 기능이 추가되어야 하므로 알려주세요.)
> 3. 초기 논의에 있었던 **리뷰 기능은 MVP 범위에서 제외**하고 Could Have로 분류했습니다.

---

## 1. Executive Summary

### 1.1 프로젝트 개요
출판사·유통사에 종속되지 않고 국내에 출간되는 신간 도서 정보를 한곳에 모아 제공하는 정보형 웹사이트입니다. 방문자는 최근 출간된 책을 장르·출간일 기준으로 빠르게 훑어보고 상세 정보를 확인할 수 있으며, 출판사·독자·제휴 희망자는 사이트를 통해 직접 문의를 남길 수 있습니다. 운영사는 회사 소개 페이지를 통해 자사의 정체성과 큐레이션 기준을 알립니다.

### 1.2 미션
"어느 출판사 책이든, 이번 주 나온 신간은 여기서 다 본다."

### 1.3 핵심 가치
- **중립성**: 특정 출판사·서점의 판매 논리가 아닌, 출간 사실 자체를 기준으로 정보를 싣는다.
- **속도**: 출간일 기준 최신순으로 정리되어, 방문자가 3초 안에 "이번 주 신간"을 파악한다.
- **접점**: 출판사 신간 등록 요청과 독자 문의를 하나의 창구로 받는다.

---

## 2. Problem Statement

### 2.1 현재 Pain Points
1. **정보가 흩어져 있음**: 신간 정보는 각 출판사 홈페이지, SNS, 온라인 서점에 분산되어 있어 한 번에 훑어보기 어렵다.
2. **판매 중심 노출**: 온라인 서점은 광고·판매량 기준으로 노출되어, 작은 출판사의 신간은 사실상 보이지 않는다.
3. **작은 출판사의 홍보 창구 부재**: 마케팅 예산이 없는 출판사는 신간을 알릴 저비용 채널이 마땅치 않다.
4. **문의 창구 불명확**: 정보 정정 요청, 등록 요청, 제휴 제안이 이메일·SNS DM으로 흩어져 관리되지 않는다.

### 2.2 기회 영역
출판사 규모와 무관한 중립적 신간 아카이브는 (1) 독자에게는 탐색 비용을 낮추고, (2) 소형 출판사에는 무료 노출 채널이 되며, (3) 운영사에는 신간 데이터 자산과 출판사 네트워크를 남긴다. 이는 이후 큐레이션 뉴스레터, 리뷰 커뮤니티, 제휴 광고로 확장할 수 있는 기반이 된다.

---

## 3. Goals & Success Metrics

### 3.1 프로젝트 목표
- **단기 (MVP, ~8주)**: 신간 300종 이상 등록, 사이트 공개, 문의 접수 창구 정상 가동
- **중기 (6개월)**: 월 방문자 10,000명, 출판사 제휴 20곳, 신간 등록 자동화(피드/일괄 업로드)
- **장기 (1년)**: 신간 아카이브 5,000종, 리뷰·뉴스레터 등 커뮤니티 기능으로 확장

### 3.2 핵심 지표 (KPIs)

| 지표 | 정의 | MVP 목표 | 6개월 목표 |
|------|------|---------|-----------|
| 등록 도서 수 | 공개 상태 도서 건수 | 300종 | 2,000종 |
| 월간 방문자(MAU) | GA4 기준 순 방문자 | 1,000명 | 10,000명 |
| 도서 상세 조회수 | 월 도서 상세 페이지 PV | 3,000 PV | 30,000 PV |
| 문의 접수 건수 | 월 문의 폼 제출 수 | 10건 | 60건 |
| 문의 응답 시간 | 접수→최초 회신 중앙값 | 2영업일 이내 | 1영업일 이내 |
| 신간 등록 소요시간 | 도서 1종 등록에 걸리는 시간 | 5분 이내 | 2분 이내 |
| 스팸 비율 | 전체 문의 중 스팸 비율 | 20% 이하 | 5% 이하 |

---

## 4. Target Users

### 4.1 사용자 유형 요약

| 유형 | 역할 | 주요 니즈 | 사이트에서 하는 일 | 우선순위 |
|------|------|-----------|-----------------|---------|
| 일반 독자 (방문자) | 비로그인 | 이번 주 신간을 빠르게 훑고 싶다 | 신간 목록 탐색, 검색, 상세 조회, 외부 구매 링크 이동 | Primary |
| 출판사 담당자 | 비로그인 | 자사 신간을 알리고 싶다 / 정보 정정 요청 | 회사 소개 확인, 문의 폼으로 등록·정정 요청 | Primary |
| 운영자·에디터 | 로그인 | 신간을 빠르게 등록·관리하고 문의를 처리하고 싶다 | 도서 CRUD, 이미지 업로드, 문의 확인·상태 관리 | Primary |
| 제휴·광고 문의자 | 비로그인 | 협업 제안 창구가 필요하다 | 회사 소개 열람, 문의 폼 제출 | Secondary |
| 서점·언론 관계자 | 비로그인 | 신간 동향 파악, 자료 확보 | 카테고리별 탐색, 문의 | Secondary |

### 4.2 Primary Persona A — 독자 "김서연"
- **직업/특성**: 30대 직장인, 월 2~3권 구매, 인스타그램에서 책 정보를 접함
- **Pain Points**: 온라인 서점 메인은 광고·베스트셀러 위주라 새로 나온 책을 훑기 어렵다
- **Goals**: 출근길 5분 동안 이번 주 신간을 장르별로 훑고, 관심 있는 책만 구매 링크로 넘어가기

### 4.3 Primary Persona B — 출판사 담당자 "박준호"
- **직업/특성**: 1인 출판사 대표, 연 4~6종 출간, 마케팅 예산 거의 없음
- **Pain Points**: 신간을 알릴 채널이 없고, 서점 MD 노출은 물량 싸움
- **Goals**: 신간 정보를 무료로 등록하고, 정보 오류를 빠르게 정정 요청

### 4.4 Primary Persona C — 운영자 "이하늘"
- **직업/특성**: 콘텐츠 에디터, 하루 10~20종 등록, 비개발자
- **Pain Points**: 표지 이미지 리사이즈, 중복 등록 확인 등 수작업이 많음
- **Goals**: 5분 안에 도서 1종 등록 완료, 문의를 놓치지 않고 처리

---

## 5. Functional Requirements (MoSCoW)

### 5.1 Must Have (MVP 필수)

| ID | 기능명 | 설명 | 수용 기준 |
|----|--------|------|----------|
| F-01 | 신간 목록 | 출간일 최신순 카드형 목록, 페이지네이션(20종/페이지) | 목록 첫 화면 LCP 2.5초 이내, 표지·제목·저자·출판사·출간일 노출 |
| F-02 | 도서 상세 | 표지, 서지정보, 책 소개, 목차, 저자 소개, 외부 구매 링크 | 필수 필드 누락 시에도 레이아웃 깨지지 않음, ISBN 표시 |
| F-03 | 검색 | 제목·저자·출판사·ISBN 부분 일치 검색 | 검색 결과 1초 이내 반환, 결과 0건 시 안내 메시지 노출 |
| F-04 | 카테고리 필터 | 장르(문학/인문/경제경영/과학/에세이 등) 및 출간월 필터 | 필터 조건이 URL 쿼리로 유지되어 공유 가능 |
| F-05 | 회사 소개 | 회사 개요, 미션, 큐레이션 기준, 연혁, 오시는 길 | 관리자가 코드 수정 없이 본문 편집 가능 |
| F-06 | 문의 접수 폼 | 이름, 이메일, 문의유형, 제목, 내용, 개인정보 수집 동의 | 필수값 검증, 제출 성공 시 접수번호 안내, 관리자 알림 메일 발송 |
| F-07 | 문의 관리 | 관리자 화면에서 문의 목록·상세·상태(접수/처리중/완료) 변경 | 상태 변경 이력 저장, 목록 필터링 가능 |
| F-08 | 도서 등록·수정·삭제 | 관리자 화면에서 도서 CRUD, 표지 이미지 업로드 | ISBN 중복 시 경고, 임시저장(초안) 상태 지원 |
| F-09 | 관리자 인증 | 이메일+비밀번호 로그인, 세션 관리 | 5회 실패 시 10분 잠금, 비밀번호 해시 저장 |
| F-10 | 스팸 방지 | 문의 폼 캡차 + 허니팟 + IP 기준 rate limit | 동일 IP 시간당 5건 초과 시 차단 |
| F-11 | 반응형 UI | 모바일/태블릿/데스크톱 대응 | 360px~1440px 레이아웃 정상 렌더 |
| F-12 | 기본 SEO | 메타태그, OG태그, sitemap.xml, 구조화 데이터(Book schema) | 도서 상세가 검색엔진에 색인, OG 카드 정상 표시 |

### 5.2 Should Have (Beta)

| ID | 기능명 | 설명 | 수용 기준 |
|----|--------|------|----------|
| F-13 | 도서 일괄 등록 | CSV/엑셀 업로드로 다건 등록 | 100행 업로드 시 오류 행 리포트 제공 |
| F-14 | 외부 API 연동 | ISBN 입력 시 서지정보 자동 채움(국립중앙도서관/알라딘 등 공개 API) | ISBN 입력 후 3초 이내 자동 채움 |
| F-15 | 출판사·저자 페이지 | 출판사/저자별 도서 모아보기 | 도서 상세에서 출판사명 클릭 시 이동 |
| F-16 | 문의 자동 회신 | 접수 확인 메일 자동 발송 | 제출 후 1분 이내 발송 |
| F-17 | 신간 뉴스레터 구독 | 이메일 수집 및 주간 발송 | 더블 옵트인, 수신거부 링크 포함 |
| F-18 | 관리자 대시보드 | 등록 도서 수, 조회수, 문의 현황 요약 | 최근 30일 지표 표시 |

### 5.3 Could Have (추후)

| ID | 기능명 | 설명 |
|----|--------|------|
| F-19 | 도서 리뷰 | 회원 가입 후 별점·리뷰 작성, 신고·검수 | 
| F-20 | 좋아요/북마크 | 관심 도서 저장 |
| F-21 | 출판사 셀프 등록 포털 | 출판사 계정이 직접 신간 등록 → 운영자 승인 |
| F-22 | 다국어(영문) 지원 | i18n |
| F-23 | RSS/오픈 API | 외부에서 신간 데이터 활용 |

### 5.4 Won't Have (이번 버전 범위 외)
- 도서 직접 판매·결제·장바구니 (외부 구매 링크로만 연결)
- 전자책 뷰어, 도서 본문 제공
- 일반 사용자 회원가입/소셜 로그인 (리뷰 도입 시 재검토)
- 실시간 채팅 상담
- 모바일 네이티브 앱

---

## 6. Non-Functional Requirements

| 항목 | 요구사항 | 측정 기준 |
|------|---------|----------|
| 성능 | 주요 페이지 초기 로딩 최적화 | LCP 2.5초 이내(4G, 모바일), 목록 API 응답 300ms 이내 |
| 가용성 | 정보성 사이트 수준의 안정성 | 월 가용률 99.5% 이상 |
| 확장성 | 도서 10만 종까지 성능 저하 없음 | 검색·목록 쿼리 인덱스 적용, 응답 500ms 이내 |
| 보안 | 관리자 인증·입력 검증 | 비밀번호 bcrypt 해시, XSS/SQLi 방어, HTTPS 전면 적용 |
| 개인정보 | 문의자 정보 최소 수집·보관 | 수집 항목 고지·동의, 보관기간 3년 후 자동 파기 |
| 접근성 | 웹 접근성 기본 준수 | WCAG 2.1 AA 주요 항목, 이미지 alt, 키보드 내비게이션 |
| SEO | 검색 유입 확보 | Lighthouse SEO 90점 이상 |
| 브라우저 | 최신 2개 버전 지원 | Chrome, Safari, Edge, 삼성 인터넷 |
| 저작권 | 표지 이미지·소개글 이용 근거 확보 | 출판사 제공 또는 인용 범위 내 사용, 정정·삭제 요청 절차 마련 |

---

## 7. User Stories

### US-1: 이번 주 신간 훑어보기
**As a** 일반 독자
**I want to** 최근 출간된 책을 최신순으로 한 화면에서 보고
**So that** 서점 광고에 밀리지 않은 새 책을 빠르게 발견할 수 있다

**Acceptance Criteria**
1. 홈 진입 시 출간일 최신순 도서 카드가 20종 노출된다.
2. 각 카드에 표지·제목·저자·출판사·출간일이 표시된다.
3. 카드 클릭 시 도서 상세로 이동한다.
4. 모바일에서 2열, 데스크톱에서 4열 그리드로 표시된다.

### US-2: 특정 책 찾기
**As a** 일반 독자
**I want to** 제목이나 저자, ISBN으로 검색해서
**So that** 들은 적 있는 책의 정보를 바로 확인할 수 있다

**Acceptance Criteria**
1. 검색어 2자 이상 입력 시 검색이 실행된다.
2. 제목·저자·출판사·ISBN 중 하나라도 부분 일치하면 결과에 포함된다.
3. 결과 0건이면 "검색 결과가 없습니다"와 문의 링크를 안내한다.

### US-3: 신간 등록 요청하기
**As a** 출판사 담당자
**I want to** 문의 폼으로 신간 등록을 요청하고
**So that** 별도 계약 없이 자사 책을 사이트에 노출할 수 있다

**Acceptance Criteria**
1. 문의유형에서 "신간 등록 요청"을 선택할 수 있다.
2. 필수값(이름, 이메일, 내용, 개인정보 동의) 미입력 시 제출이 차단되고 인라인 오류가 표시된다.
3. 제출 성공 시 접수번호가 화면에 표시된다.
4. 운영자에게 알림 메일이 발송된다.

### US-4: 도서 등록하기
**As a** 운영자
**I want to** 관리자 화면에서 도서 정보를 입력하고 표지를 업로드해서
**So that** 5분 이내에 신간 1종을 공개할 수 있다

**Acceptance Criteria**
1. 필수 필드(제목, 저자, 출판사, 출간일, ISBN)를 입력하면 저장된다.
2. 동일 ISBN이 이미 있으면 경고 후 중복 저장을 막는다.
3. 상태를 초안/공개/비공개로 전환할 수 있다.
4. 표지 이미지는 업로드 시 자동으로 리사이즈·webp 변환된다.

### US-5: 문의 처리하기
**As a** 운영자
**I want to** 접수된 문의를 목록에서 확인하고 상태를 바꿔서
**So that** 놓치는 문의 없이 응대 현황을 파악할 수 있다

**Acceptance Criteria**
1. 문의 목록을 상태·유형·기간으로 필터링할 수 있다.
2. 상태를 접수→처리중→완료로 변경할 수 있고 변경 시각이 기록된다.
3. 상세에서 문의자 정보와 내용 전문을 볼 수 있다.

---

## 8. Information Architecture

### 8.1 화면 목록

| ID | 화면명 | URL | 접근 권한 | 주요 구성 요소 | 관련 기능 |
|----|--------|-----|----------|--------------|----------|
| S-01 | 홈 (신간 목록) | `/` | 전체 | 히어로 카피, 신간 카드 그리드, 카테고리 탭, 검색바 | F-01, F-03, F-04 |
| S-02 | 도서 목록/검색 결과 | `/books?q=&category=&month=` | 전체 | 필터, 정렬, 카드 목록, 페이지네이션 | F-01, F-03, F-04 |
| S-03 | 도서 상세 | `/books/{slug}` | 전체 | 표지, 서지정보 표, 책 소개, 목차, 저자 소개, 구매 링크, 관련 도서 | F-02, F-12 |
| S-04 | 회사 소개 | `/about` | 전체 | 회사 개요, 미션, 큐레이션 기준, 연혁, 오시는 길(지도) | F-05 |
| S-05 | 문의하기 | `/contact` | 전체 | 문의 폼, 유형 선택, 개인정보 동의, 캡차 | F-06, F-10 |
| S-06 | 문의 완료 | `/contact/complete` | 전체 | 접수번호, 예상 응답 시간 안내 | F-06 |
| S-07 | 개인정보처리방침 | `/privacy` | 전체 | 수집 항목·목적·보관기간 | 법적 필수 |
| S-08 | 이용약관 | `/terms` | 전체 | 서비스 이용 조건, 저작권·정정 요청 안내 | 법적 필수 |
| S-09 | 404 / 오류 | `/404`, `/500` | 전체 | 안내 문구, 홈·검색 링크 | - |
| S-10 | 관리자 로그인 | `/admin/login` | 비로그인 | 이메일·비밀번호 입력, 실패 잠금 | F-09 |
| S-11 | 관리자 대시보드 | `/admin` | 관리자 | 등록 도서 수, 최근 문의, 조회수 요약 | F-18 |
| S-12 | 관리자 도서 목록 | `/admin/books` | 관리자 | 검색, 상태 필터, 일괄 작업 | F-08 |
| S-13 | 관리자 도서 등록/수정 | `/admin/books/new`, `/admin/books/{id}/edit` | 관리자 | 서지정보 폼, 표지 업로드, 카테고리 선택, 상태 전환 | F-08, F-14 |
| S-14 | 관리자 문의 목록 | `/admin/inquiries` | 관리자 | 상태·유형·기간 필터, 목록 | F-07 |
| S-15 | 관리자 문의 상세 | `/admin/inquiries/{id}` | 관리자 | 문의 전문, 상태 변경, 처리 메모 | F-07 |
| S-16 | 관리자 회사 소개 편집 | `/admin/pages/about` | 관리자 | 리치텍스트 에디터, 미리보기 | F-05 |
| S-17 | 관리자 계정 관리 | `/admin/users` | 최고관리자 | 계정 목록, 역할 부여 | F-09 |

### 8.2 핵심 User Flow

**Flow A — 독자 탐색**
```
홈(S-01) → [카테고리 탭/검색] → 도서 목록(S-02) → 도서 상세(S-03) → 외부 구매 링크(이탈)
```

**Flow B — 출판사 등록 요청**
```
홈(S-01) → 회사 소개(S-04) → 문의하기(S-05) → [유형: 신간 등록 요청] → 제출 → 완료(S-06)
                                                                            ↓
                                                      운영자 알림 메일 → 관리자 문의 상세(S-15) → 상태: 완료
```

**Flow C — 운영자 도서 등록**
```
관리자 로그인(S-10) → 대시보드(S-11) → 도서 목록(S-12) → 도서 등록(S-13)
   → [ISBN 입력 → 자동 채움(F-14)] → 표지 업로드 → 저장(초안) → 검토 → 공개 → 도서 상세(S-03) 노출
```

---

## 9. Data Model

### 9.1 엔티티 관계 요약

```
Publisher 1 ──< Book >── N BookAuthor N ──> Author
Book N ──< BookCategory >── N Category
Book 1 ──< BookLink            (외부 구매/소개 링크)
AdminUser 1 ──< Book           (등록자)
AdminUser 1 ──< InquiryLog >── N Inquiry
Inquiry 1 ──< InquiryLog       (상태 변경 이력)
Page (single)                  (회사 소개 등 정적 페이지 본문)
```

### 9.2 Book (도서)

| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| id | BIGINT | PK, auto | 내부 식별자 |
| isbn13 | VARCHAR(13) | UNIQUE, NOT NULL | ISBN-13, 중복 등록 방지 키 |
| title | VARCHAR(255) | NOT NULL | 도서명 |
| subtitle | VARCHAR(255) | NULL | 부제 |
| slug | VARCHAR(255) | UNIQUE, NOT NULL | URL 식별자 (제목 기반 자동 생성) |
| publisher_id | BIGINT | FK → Publisher.id, NOT NULL | 출판사 |
| published_at | DATE | NOT NULL, INDEX | 출간일 (최신순 정렬 기준) |
| price | INT | NULL | 정가(원) |
| page_count | INT | NULL | 쪽수 |
| cover_image_url | VARCHAR(500) | NULL | 표지 이미지 (webp) |
| description | TEXT | NULL | 책 소개 |
| toc | TEXT | NULL | 목차 |
| status | ENUM('draft','published','hidden') | NOT NULL, default 'draft' | 공개 상태 |
| view_count | INT | NOT NULL, default 0 | 상세 조회수 |
| created_by | BIGINT | FK → AdminUser.id | 등록자 |
| created_at | TIMESTAMP | NOT NULL | 생성일시 |
| updated_at | TIMESTAMP | NOT NULL | 수정일시 |

> 인덱스: `(status, published_at DESC)`, `(title)` 전문검색, `(isbn13)`

### 9.3 Publisher (출판사)

| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| id | BIGINT | PK, auto | |
| name | VARCHAR(120) | UNIQUE, NOT NULL | 출판사명 |
| slug | VARCHAR(120) | UNIQUE, NOT NULL | 출판사 페이지 URL |
| website_url | VARCHAR(500) | NULL | 공식 홈페이지 |
| description | TEXT | NULL | 소개 |
| created_at | TIMESTAMP | NOT NULL | |

### 9.4 Author (저자)

| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| id | BIGINT | PK, auto | |
| name | VARCHAR(120) | NOT NULL, INDEX | 저자명 |
| bio | TEXT | NULL | 저자 소개 |
| created_at | TIMESTAMP | NOT NULL | |

### 9.5 BookAuthor (도서-저자 연결)

| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| book_id | BIGINT | PK(복합), FK → Book.id | |
| author_id | BIGINT | PK(복합), FK → Author.id | |
| role | ENUM('author','translator','illustrator','editor') | NOT NULL, default 'author' | 역할(지은이/옮긴이/그림/엮은이) |
| sort_order | SMALLINT | NOT NULL, default 0 | 표기 순서 |

### 9.6 Category (분류)

| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| id | INT | PK, auto | |
| name | VARCHAR(60) | UNIQUE, NOT NULL | 장르명 (문학, 인문, 경제경영 등) |
| slug | VARCHAR(60) | UNIQUE, NOT NULL | URL 식별자 |
| parent_id | INT | FK → Category.id, NULL | 상위 분류 (2단계까지) |
| sort_order | SMALLINT | NOT NULL, default 0 | 노출 순서 |

### 9.7 BookCategory (도서-분류 연결)

| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| book_id | BIGINT | PK(복합), FK → Book.id | |
| category_id | INT | PK(복합), FK → Category.id | |
| is_primary | BOOLEAN | NOT NULL, default false | 대표 분류 여부 |

### 9.8 BookLink (외부 링크)

| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| id | BIGINT | PK, auto | |
| book_id | BIGINT | FK → Book.id, NOT NULL | |
| store_name | VARCHAR(60) | NOT NULL | 교보문고, 예스24, 알라딘, 출판사 등 |
| url | VARCHAR(500) | NOT NULL | 이동 링크 |
| sort_order | SMALLINT | NOT NULL, default 0 | 노출 순서 |

### 9.9 Inquiry (문의)

| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| id | BIGINT | PK, auto | |
| ticket_no | VARCHAR(20) | UNIQUE, NOT NULL | 접수번호 (예: INQ-20260716-0007) |
| type | ENUM('book_request','correction','partnership','press','etc') | NOT NULL | 신간 등록 요청 / 정보 정정 / 제휴 / 취재 / 기타 |
| name | VARCHAR(60) | NOT NULL | 문의자 이름 |
| email | VARCHAR(255) | NOT NULL | 회신용 이메일 |
| phone | VARCHAR(30) | NULL | 연락처(선택) |
| company | VARCHAR(120) | NULL | 소속(출판사명 등) |
| subject | VARCHAR(200) | NOT NULL | 제목 |
| message | TEXT | NOT NULL | 문의 내용 |
| status | ENUM('received','in_progress','done','spam') | NOT NULL, default 'received' | 처리 상태 |
| privacy_agreed | BOOLEAN | NOT NULL | 개인정보 수집 동의 |
| agreed_at | TIMESTAMP | NOT NULL | 동의 시각 |
| ip_address | VARCHAR(45) | NOT NULL | 스팸 대응용 (IPv6 대응) |
| assignee_id | BIGINT | FK → AdminUser.id, NULL | 담당자 |
| memo | TEXT | NULL | 내부 처리 메모 |
| created_at | TIMESTAMP | NOT NULL, INDEX | 접수일시 |
| purge_at | DATE | NOT NULL | 파기 예정일 (접수일 + 3년) |

### 9.10 InquiryLog (문의 처리 이력)

| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| id | BIGINT | PK, auto | |
| inquiry_id | BIGINT | FK → Inquiry.id, NOT NULL | |
| admin_user_id | BIGINT | FK → AdminUser.id, NOT NULL | 처리자 |
| from_status | VARCHAR(20) | NOT NULL | 변경 전 상태 |
| to_status | VARCHAR(20) | NOT NULL | 변경 후 상태 |
| note | VARCHAR(500) | NULL | 비고 |
| created_at | TIMESTAMP | NOT NULL | 변경 시각 |

### 9.11 AdminUser (관리자)

| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| id | BIGINT | PK, auto | |
| email | VARCHAR(255) | UNIQUE, NOT NULL | 로그인 ID |
| password_hash | VARCHAR(255) | NOT NULL | bcrypt 해시 |
| name | VARCHAR(60) | NOT NULL | 이름 |
| role | ENUM('owner','editor') | NOT NULL, default 'editor' | 최고관리자 / 에디터 |
| last_login_at | TIMESTAMP | NULL | 마지막 로그인 |
| failed_count | SMALLINT | NOT NULL, default 0 | 로그인 실패 횟수 |
| locked_until | TIMESTAMP | NULL | 잠금 해제 시각 |
| created_at | TIMESTAMP | NOT NULL | |

### 9.12 Page (정적 페이지 본문)

| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| id | INT | PK, auto | |
| key | VARCHAR(40) | UNIQUE, NOT NULL | `about`, `privacy`, `terms` |
| title | VARCHAR(120) | NOT NULL | 페이지 제목 |
| body | TEXT | NOT NULL | 본문 (HTML/Markdown) |
| updated_by | BIGINT | FK → AdminUser.id | 최종 수정자 |
| updated_at | TIMESTAMP | NOT NULL | 최종 수정일시 |

### 9.13 Review (Could Have — F-19 도입 시)

| 필드 | 타입 | 제약 | 설명 |
|------|------|------|------|
| id | BIGINT | PK, auto | |
| book_id | BIGINT | FK → Book.id, NOT NULL | |
| member_id | BIGINT | FK → Member.id, NOT NULL | 리뷰 도입 시 Member 테이블 신설 필요 |
| rating | TINYINT | NOT NULL, 1~5 | 별점 |
| content | TEXT | NOT NULL | 리뷰 본문 |
| status | ENUM('visible','hidden','reported') | NOT NULL, default 'visible' | 노출 상태 |
| created_at | TIMESTAMP | NOT NULL | |

---

## 10. Technical Architecture

### 10.1 기술 스택 (제안 — 제약 미정)

| Layer | 제안 기술 | 선정 이유 |
|-------|----------|----------|
| Frontend | Next.js (App Router) + TypeScript | SSR/SSG로 SEO 확보, 도서 상세 정적 생성에 유리 |
| 스타일 | Tailwind CSS | 반응형 그리드 빠른 구현 |
| Backend | Next.js Route Handlers 또는 별도 API 서버 | MVP 규모에서 단일 배포로 운영 부담 최소화 |
| Database | PostgreSQL | 전문검색(tsvector), 관계형 모델 적합 |
| 이미지 | S3 호환 스토리지 + CDN | 표지 이미지 리사이즈·캐싱 |
| 메일 | 트랜잭션 메일 서비스(SES/Resend 등) | 문의 알림·자동 회신 |
| 인증 | 세션 기반 관리자 인증 | 관리자만 로그인하므로 단순 구성 |
| 배포/모니터링 | Vercel 또는 컨테이너 + GA4, Sentry | 트래픽 규모 대비 운영 비용 최소 |

> 기술 스택 선호나 제약(기존 인프라, 사내 표준, 예산)이 있으면 알려주세요. 위 표는 전제 없는 상태의 기본 제안입니다.

### 10.2 시스템 구조
```
[방문자] ──HTTPS──> [CDN] ──> [Next.js 앱: 공개 페이지 SSG/ISR]
                                    │
                                    ├──> [API/Route Handler] ──> [PostgreSQL]
                                    ├──> [이미지 스토리지 + CDN]
                                    └──> [메일 서비스] ──> 운영자 알림 / 문의자 자동 회신

[운영자] ──HTTPS──> [Next.js 앱: /admin (세션 인증)] ──> 동일 API/DB
```

- 도서 상세는 ISR(재검증 주기 10분)로 생성해 트래픽 대비 DB 부하를 낮춘다.
- 문의 폼은 서버 액션에서 캡차 검증 → rate limit 확인 → 저장 → 메일 발송 순으로 처리한다.

---

## 11. API Specification (초안)

| Method | Endpoint | 권한 | 설명 |
|--------|----------|------|------|
| GET | `/api/v1/books` | 공개 | 도서 목록 (query: `q`, `category`, `month`, `page`, `sort`) |
| GET | `/api/v1/books/{slug}` | 공개 | 도서 상세 |
| GET | `/api/v1/categories` | 공개 | 카테고리 트리 |
| POST | `/api/v1/inquiries` | 공개 | 문의 접수 (캡차 토큰 필수) |
| POST | `/api/v1/admin/auth/login` | 공개 | 관리자 로그인 |
| POST | `/api/v1/admin/auth/logout` | 관리자 | 로그아웃 |
| GET | `/api/v1/admin/books` | 관리자 | 도서 목록(초안 포함) |
| POST | `/api/v1/admin/books` | 관리자 | 도서 생성 |
| PATCH | `/api/v1/admin/books/{id}` | 관리자 | 도서 수정 / 상태 전환 |
| DELETE | `/api/v1/admin/books/{id}` | 관리자 | 도서 삭제 (soft delete) |
| POST | `/api/v1/admin/uploads/cover` | 관리자 | 표지 업로드 (리사이즈·webp 변환) |
| GET | `/api/v1/admin/inquiries` | 관리자 | 문의 목록 (query: `status`, `type`, `from`, `to`) |
| PATCH | `/api/v1/admin/inquiries/{id}` | 관리자 | 상태 변경 / 메모 |
| PUT | `/api/v1/admin/pages/{key}` | 관리자 | 정적 페이지 본문 수정 |

---

## 12. Development Roadmap

> 일정 미정 상태이므로 **1인 풀스택 또는 2인(개발 1, 기획·에디터 1)** 기준 추정치입니다.

| Phase | 기간 | 주요 기능 | 목표 |
|-------|------|----------|------|
| Phase 0. 설계 | 1주 | 데이터 모델 확정, 화면 와이어프레임, 디자인 톤 | 개발 착수 가능 상태 |
| Phase 1. 코어 | 2주 | DB 스키마, 관리자 인증(F-09), 도서 CRUD(F-08) | 운영자가 도서를 등록할 수 있음 |
| Phase 2. 공개 화면 | 2주 | 홈·목록·상세·검색·필터(F-01~04), 반응형(F-11) | 방문자가 신간을 탐색할 수 있음 |
| Phase 3. 회사소개·문의 | 1.5주 | 회사 소개(F-05), 문의 폼·관리(F-06/07), 스팸 방지(F-10) | 문의 창구 가동 |
| Phase 4. 마감 | 1.5주 | SEO(F-12), 접근성, 약관·개인정보, QA, 초기 데이터 300종 입력 | **MVP 공개** |
| Phase 5. Beta | +4주 | 일괄 등록(F-13), ISBN 자동 채움(F-14), 출판사·저자 페이지(F-15), 뉴스레터(F-17) | 운영 효율화 |
| Phase 6. 확장 | 이후 | 리뷰(F-19), 셀프 등록 포털(F-21) | 커뮤니티 전환 |

**MVP 합계: 약 8주**

---

## 13. Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| 표지 이미지·책 소개 저작권 분쟁 | High | Medium | 출판사 제공 자료 우선 사용, 출처 표기, 정정·삭제 요청 절차를 이용약관에 명시하고 24시간 내 처리 |
| 콘텐츠 수급 실패 (신간 등록량 부족) | High | High | MVP 전 300종 선입력, 공개 API(ISBN) 활용, 출판사 대상 등록 안내 메일 발송 |
| 수작업 등록 부담으로 운영 중단 | High | Medium | Phase 5의 일괄 등록·자동 채움을 우선 앞당길 수 있도록 설계, 등록 소요시간 KPI 상시 관찰 |
| 문의 폼 스팸 유입 | Medium | High | 캡차 + 허니팟 + IP rate limit, 스팸 상태값으로 분리 관리 |
| 검색 유입 부진 | Medium | Medium | 구조화 데이터·sitemap 초기 적용, 도서 상세를 색인 대상 랜딩으로 설계 |
| 개인정보 보관 관련 위반 | Medium | Low | 수집 최소화, `purge_at` 기준 자동 파기 배치, 처리방침 고지 |
| 요구사항 확대(리뷰·커뮤니티 조기 도입) | Medium | Medium | Won't Have 목록을 문서로 고정하고 Phase 6로 이관 |

---

## 14. Appendix

### 14.1 용어 정의
- **신간**: 출간일 기준 최근 3개월 이내 도서 (홈 노출 기준)
- **ISBN-13**: 국제표준도서번호 13자리. 본 서비스의 도서 중복 판별 키
- **초안(draft)**: 등록은 되었으나 공개되지 않은 도서 상태
- **접수번호(ticket_no)**: 문의자에게 안내하는 식별자. `INQ-YYYYMMDD-순번`
- **MoSCoW**: Must / Should / Could / Won't 우선순위 분류법

### 14.2 열린 질문 (확정 필요)
1. 도서 등록 주체 — 운영자 전용인가, 출판사 셀프 등록도 허용하는가?
2. 리뷰 기능 — MVP에 포함할 것인가? (포함 시 회원 체계·신고·검수 설계 추가 필요, 일정 +3주 예상)
3. 수익 모델 — 제휴 링크 수수료, 광고, 없음 중 무엇인가? (구매 링크 설계에 영향)
4. 회사 소개에 담을 내용 — 회사명, 연혁, 구성원, 오시는 길 데이터가 준비되어 있는가?
5. 문의 유형 목록 — 위 5종(등록 요청/정정/제휴/취재/기타)으로 충분한가?
6. 기술 제약 — 기존 인프라·호스팅·사내 표준 스택이 있는가?
7. 일정·인력 — 목표 오픈 시점과 투입 인원은?

### 14.3 참고 자료
- 국립중앙도서관 서지정보유통지원시스템(SEOJI) 오픈 API — ISBN 기반 서지정보 확보
- 개인정보보호법상 수집·이용 동의 및 보관기간 고지 요건
- schema.org `Book` 구조화 데이터 스펙
