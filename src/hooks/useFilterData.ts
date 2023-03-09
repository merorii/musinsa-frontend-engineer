import { useRecoilValue } from "recoil";
import { filterState } from "store/filterState";

export const useFilterData = (result: any) => {
  const filter = useRecoilValue(filterState);

  const data = () => {
    if (!result) return;
    let updated = result;

    filter.forEach((activeFilter) => {
      if (activeFilter === "isFemale") {
        updated = updated.filter((item: any) => item.gender === "Female");
      }
      if (activeFilter === "isLive") {
        updated = updated.filter((item: any) => item.died === "");
      }
      if (activeFilter === "noTvSeries") {
        updated = updated.filter(
          (item: any) =>
            item.tvSeries.length <= 0 || (item.tvSeries.length === 1 && item.tvSeries[0] === "")
        );
      }
    });

    return updated;
  };

  return data();
};
