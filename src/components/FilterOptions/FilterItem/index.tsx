//recoil
import { useRecoilState } from "recoil";
import { filterState } from "store/filterState";

//datas
import { FilterValueType, FilterTextType } from "data/filterOptions";

//styles
import * as S from "../style";
import reset from "assets/icons/reset.svg";

interface FilterPropsType {
  value: FilterValueType;
  text: FilterTextType;
}

export const FilterItem = ({ value, text }: FilterPropsType) => {
  const [filter, setFilter] = useRecoilState(filterState);
  const isActiveFilter = filter.includes(value);

  const toggleFilter = () => {
    if (value === "reset") {
      setFilter([]);
      return;
    }
    const updated = filter.includes(value)
      ? filter.filter((active) => active !== value)
      : filter.concat(value);
    setFilter(updated);
  };

  return (
    <S.FilterOption onClick={toggleFilter} isActiveFilter={isActiveFilter}>
      {value === "reset" ? <img src={reset} alt="필터 초기화" /> : text}
    </S.FilterOption>
  );
};
