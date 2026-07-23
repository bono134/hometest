// Supabase 공개 접속 정보(브라우저/서버 공통). 클라이언트 노출이 허용된 값만 다룬다.
// 서버 전용 service role 키는 여기서 참조하지 않는다. (admin.ts 참조 — CLAUDE.md 5.1)
//
// NEXT_PUBLIC_* 는 브라우저 번들에 인라인되어야 하므로 반드시 정적으로 참조한다.
// (process.env[name] 같은 동적 접근은 브라우저에서 치환되지 않는다.)

export function getSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url) {
    throw new Error(
      "환경 변수 NEXT_PUBLIC_SUPABASE_URL 이 설정되지 않았습니다. .env.local 을 확인해주세요.",
    );
  }
  return url;
}

export function getSupabaseAnonKey(): string {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!key) {
    throw new Error(
      "환경 변수 NEXT_PUBLIC_SUPABASE_ANON_KEY 이 설정되지 않았습니다. .env.local 을 확인해주세요.",
    );
  }
  return key;
}
