export const filterOptions: Record<string, string> = {
  isLive: "생존인물만",
  isFemale: "여자",
  noTvSeries: "tvSeries 없음",
};

export type FilterValueType = keyof typeof filterOptions;

export type FilterTextType = typeof filterOptions[FilterValueType];
