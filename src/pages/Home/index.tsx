import { useRef } from "react";
import qs from "qs";

//components
import { FilterOptions, CharacterList } from "components";

//hook
import { useFilterData, useFetchData, useObserver } from "hooks";

export const Home = () => {
  const page = JSON.stringify(
    qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    }).page || 1
  ).replace(/\"/g, "");

  const { data, status, hasNextPage, fetchNextPage } = useFetchData(page);

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
  });

  return (
    <main>
      <FilterOptions />
      {status === "loading" && <div>로딩중</div>}
      {status === "error" && <div>ERROR!</div>}
      {status === "success" &&
        (filtered ? <CharacterList data={filtered} /> : <div>일치하는 데이터가 없습니다.</div>)}
      <div ref={bottom} />
    </main>
  );
};
