import { useRef } from "react";
import { useRecoilState } from "recoil";
import qs from "qs";

import { CommonLayout } from "layout";

import { Filter, CharacterItem, Loader } from "components";

import { useFilterData, useFetchData, useObserver } from "hooks";

import { filterState } from "store/states/filterState";

import { FilterValueType } from "store/types/filter";
import { Character } from "store/types/character";

export const Characters = () => {
  const page = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  }).page;

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

  const onClickRemoveBtn = (removeUrl: Character["url"]) => {
    setFilter((prev) => ({
      ...prev,
      remove: [...prev.remove, removeUrl],
    }));
  };

  return (
    <CommonLayout>
      <Filter
        filter={filter}
        onToggleFilterItem={onToggleFilterItem}
        resetBtn={true}
        onClickResetBtn={onClickResetBtn}
      />
      <section>
        {status === "error" && <div>문제가 발생했습니다. 다시 시도해주세요.</div>}
        {status === "success" &&
          (filtered ? (
            <ul>
              {filtered.map((item: Character) => {
                return (
                  <CharacterItem key={item.url} data={item} onClickRemove={onClickRemoveBtn} />
                );
              })}
            </ul>
          ) : (
            <div>일치하는 데이터가 없습니다.</div>
          ))}
      </section>
      <div ref={bottom} />
      {isFetching && <Loader width={30} height={30} />}
    </CommonLayout>
  );
};
