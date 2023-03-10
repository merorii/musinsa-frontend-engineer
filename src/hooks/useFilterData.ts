import { useRecoilValue } from "recoil";

import { filterState } from "store/states/filterState";

import { Character } from "store/types/character";

export const useFilterData = (result: Character[] | undefined) => {
  const { filter, remove } = useRecoilValue(filterState);
  if (!result) return;

  const data = () => {
    let updated = result;

    filter.forEach((activeFilter) => {
      if (activeFilter === "isFemale") {
        updated = updated.filter((item) => item.gender === "Female");
      }
      if (activeFilter === "isLive") {
        updated = updated.filter((item) => item.died === "");
      }
      if (activeFilter === "noTvSeries") {
        updated = updated.filter(
          (item) =>
            item.tvSeries.length <= 0 || (item.tvSeries.length === 1 && item.tvSeries[0] === "")
        );
      }
    });

    return updated.filter((item) => !remove.includes(item.url));
  };

  return data();
};
