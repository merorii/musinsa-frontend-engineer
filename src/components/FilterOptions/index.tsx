//styles
import { filterOptions, FilterTextType, FilterValueType } from "data/filterOptions";
import * as S from "./style";

export const FilterOptions = () => {
  return (
    <S.Section>
      {(Object.entries(filterOptions) as Array<[FilterValueType, FilterTextType]>).map(([value, text]) => (
        <div>{text}</div>
      ))}
    </S.Section>
  );
};
