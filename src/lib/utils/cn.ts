// 조건부 className 결합 헬퍼. (CLAUDE.md 7장)
// MVP에서는 외부 의존성 없이 truthy 값만 이어 붙인다.
// 클래스 병합(clsx + tailwind-merge) 도입이 필요하면 별도 승인 후 교체한다.
export type ClassValue = string | number | null | false | undefined;

export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
