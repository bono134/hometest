import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { getSupabaseAnonKey, getSupabaseUrl } from "./config";

// 서버(서버 컴포넌트 / Route Handler / 서버 액션)에서 사용하는 Supabase 클라이언트.
// 요청 쿠키에서 세션을 읽고, 가능한 경우 갱신 쿠키를 기록한다.
// anon 키로 동작하며 RLS 정책의 적용을 받는다.
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // 서버 컴포넌트에서는 쿠키 쓰기가 불가능하다.
          // 세션 갱신 쿠키 기록은 미들웨어에서 담당한다.
        }
      },
    },
  });
}
