import { useRef } from "react";
import qs from "qs";

//components
import { FilterOptions, CharacterList, Loader } from "components";

//hook
import { useFilterData, useFetchData, useObserver } from "hooks";

import * as S from "./style";

export const Home = () => {
  const page = JSON.stringify(
    qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    }).page || 1
  ).replace(/\"/g, "");

  const { data, status, hasNextPage, fetchNextPage, isFetching } = useFetchData(page);

  const charactersData = data?.map((a) => a.data).flat();
  const filtered = useFilterData(charactersData);

  const bottom = useRef(null);
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting) {
      hasNextPage && fetchNextPage();
    }
  };

  useObserver({
    target: bottom.current,
    onIntersect,
    threshold: 0.7,
  });

  return (
    <S.Main>
      <FilterOptions />
      {status === "error" && <div>문제가 발생했습니다. 다시 시도해주세요.</div>}
      {status === "success" &&
        (filtered ? <CharacterList data={filtered} /> : <div>일치하는 데이터가 없습니다.</div>)}
      <div ref={bottom} />
      {isFetching && <Loader />}
    </S.Main>
  );
};
