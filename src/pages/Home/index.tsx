import qs from "qs";

//components
import { FilterOptions } from "components/FilterOptions";
import { CharacterList } from "components/List/CharacterList";

//hook
import { useFilterData, useFetchData } from "hooks";

export const Home = () => {
  const page = JSON.stringify(
    qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    }).page || 1
  ).replace(/\"/g, "");

  const { data, status } = useFetchData(page);
  const filtered = useFilterData(data);

  return (
    <main>
      <FilterOptions />
      {status === "loading" && <div>로딩중</div>}
      {status === "success" && (filtered ? <CharacterList data={filtered} /> : <div>일치하는 데이터가 없습니다.</div>)}
    </main>
  );
};
