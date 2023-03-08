//components
import { FilterOptions } from "components/FilterOptions";

//hook
import { useFilterData, useFetchData } from "hooks";

//types
import { FilteredData } from "hooks";

export const Product = () => {
  const { data } = useFetchData();
  const filtered = useFilterData(data);
  return (
    <main>
      <FilterOptions />
      <section>
        {filtered &&
          filtered.map(({ url, gender, name, tvSeries }: FilteredData) => {
            return (
              <div key={url}>
                {gender} / {name} / {tvSeries}
              </div>
            );
          })}
      </section>
    </main>
  );
};
