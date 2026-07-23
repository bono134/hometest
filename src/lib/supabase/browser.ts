import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseAnonKey, getSupabaseUrl } from "./config";

// 브라우저(클라이언트 컴포넌트)에서 사용하는 Supabase 클라이언트.
// anon 키로 동작하며 RLS 정책의 적용을 받는다.
export function createSupabaseBrowserClient() {
  return createBrowserClient(getSupabaseUrl(), getSupabaseAnonKey());
}
