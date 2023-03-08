//recoil
import { useRecoilValue } from "recoil";
import { filterState } from "store/filterState";

//components
import { FilterOptions } from "components/FilterOptions";

export const Product = () => {
  const filter = useRecoilValue(filterState);
  console.log(filter);
  return (
    <main>
      <FilterOptions />
      product list
    </main>
  );
};
