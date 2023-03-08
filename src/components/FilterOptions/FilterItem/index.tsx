//styles
import { FilterValueType, FilterTextType } from "data/filterOptions";
import * as S from "../style";

interface FilterPropsType {
  value: FilterValueType;
  text: FilterTextType;
}

export const FilterItem = ({ value, text }: FilterPropsType) => {
  const toggleFilter = () => {
    console.log(value);
    if (value === "reset") {
      console.log("리셋");
    }
  };
  return (
    <S.FilterOption onClick={toggleFilter} isActiveFilter={false}>
      {text}
    </S.FilterOption>
  );
};
