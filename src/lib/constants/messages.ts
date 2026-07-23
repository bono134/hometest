// 화면에 노출되는 한국어 카피는 이 파일에 모은다. (CLAUDE.md 6장)
// MVP 단계에서는 i18n 라이브러리를 도입하지 않는다.

export const SITE = {
  title: "신간모아",
  description:
    "출판사와 무관하게 국내 신간 도서 정보를 한곳에 모아 보여주는 사이트입니다.",
} as const;

export const HOME = {
  heroTitle: "이번 주 신간, 여기서 다 봅니다",
  heroSubtitle: "어느 출판사 책이든 새로 나온 신간을 한곳에서 만나보세요.",
  scaffoldNotice: "기본 프로젝트 구조가 준비되었습니다. 화면과 기능은 이제부터 채워집니다.",
} as const;
