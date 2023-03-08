//compnents
import { FilterItem } from "./FilterItem";

//data
import { filterOptions, FilterTextType, FilterValueType } from "data/filterOptions";

//styles
import * as S from "./style";

export const FilterOptions = () => {
  return (
    <S.Section>
      {(Object.entries(filterOptions) as Array<[FilterValueType, FilterTextType]>).map(([value, text]) => (
        <FilterItem key={value} value={value} text={text} />
      ))}
    </S.Section>
  );
};
