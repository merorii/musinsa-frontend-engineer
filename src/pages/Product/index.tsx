//components
import { FilterOptions } from "components/FilterOptions";
import { CharacterList } from "components/List/CharacterList";

//hook
import { useFilterData, useFetchData } from "hooks";

export const Product = () => {
  const { data } = useFetchData();
  const filtered = useFilterData(data);
  return (
    <main>
      <FilterOptions />
      {filtered ? <CharacterList data={filtered} /> : <div>없음</div>}
    </main>
  );
};
