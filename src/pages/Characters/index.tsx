import { useRef } from "react";
import { useRecoilState } from "recoil";
import qs from "qs";

import { CommonLayout } from "layout/CommonLayout";

import { Filter, CharacterList, Loader } from "components";

import { useFilterData, useFetchData, useObserver } from "hooks";

import { filterState } from "store/filterState";

import { FilterValueType } from "data/filterOptions";

export const Characters = () => {
  const page = JSON.stringify(
    qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    }).page || 1
  ).replace(/\"/g, "");

  const { data, status, hasNextPage, fetchNextPage, isFetching } = useFetchData(page);
  const [{ filter }, setFilter] = useRecoilState(filterState);

  const charactersData = data?.map((a) => a.data).flat();
  const filtered = useFilterData(charactersData);

  const bottom = useRef(null);

  useObserver({
    target: bottom.current,
    hasNextPage,
    fetchNextPage,
    threshold: 0.7,
  });

  const onToggleFilterItem = (value: FilterValueType) => {
    let updated = filter;
    if (filter.includes(value)) {
      updated = filter.filter((active) => active !== value);
    } else {
      updated = filter.concat(value);
    }
    setFilter((prev) => ({ ...prev, filter: updated }));
  };

  const onClickResetBtn = () => {
    setFilter({ filter: [], remove: [] });
  };

  return (
    <CommonLayout>
      <Filter
        filter={filter}
        onToggleFilterItem={onToggleFilterItem}
        resetBtn={true}
        onClickResetBtn={onClickResetBtn}
      />

      {status === "error" && <div>문제가 발생했습니다. 다시 시도해주세요.</div>}
      {status === "success" &&
        (filtered ? <CharacterList data={filtered} /> : <div>일치하는 데이터가 없습니다.</div>)}
      <div ref={bottom} />
      {isFetching && <Loader />}
    </CommonLayout>
  );
};
