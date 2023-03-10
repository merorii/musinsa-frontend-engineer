import { filterOptions, FilterValueType } from "store/types/filter";

import * as S from "./style";
import reset from "assets/icons/reset.svg";

interface FilterPropsType {
  filter: Array<FilterValueType>;
  onToggleFilterItem: (value: FilterValueType) => void;
  resetBtn: boolean;
  onClickResetBtn: () => void;
}

export const Filter = ({
  filter,
  onToggleFilterItem,
  resetBtn,
  onClickResetBtn,
}: FilterPropsType) => {
  return (
    <S.Section>
      {Object.entries(filterOptions).map(([value, text]) => (
        <S.FilterItem
          key={value}
          onClick={() => {
            onToggleFilterItem(value);
          }}
          isActive={filter.includes(value)}
        >
          {text}
        </S.FilterItem>
      ))}
      {resetBtn && (
        <S.ResetBtn onClick={onClickResetBtn}>
          <img src={reset} alt="필터 초기화" />
        </S.ResetBtn>
      )}
    </S.Section>
  );
};
