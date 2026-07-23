import { createClient } from "@supabase/supabase-js";
import { getSupabaseUrl } from "./config";

// service role 키를 사용하는 관리 전용 클라이언트. **서버에서만** 사용한다.
// 이 클라이언트는 RLS를 우회하므로 꼭 필요한 경우에만 신중히 사용한다. (CLAUDE.md 5.1 / 5.2)
// SUPABASE_SERVICE_ROLE_KEY 는 NEXT_PUBLIC_ 접두사가 없어 브라우저 번들에 포함되지 않으며,
// 이 파일 밖에서 참조하지 않는다. (더 강한 빌드타임 보호가 필요하면 server-only 패키지 도입을 검토)
export function createSupabaseAdminClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    throw new Error(
      "환경 변수 SUPABASE_SERVICE_ROLE_KEY 이 설정되지 않았습니다. .env.local 을 확인해주세요.",
    );
  }

  return createClient(getSupabaseUrl(), serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
