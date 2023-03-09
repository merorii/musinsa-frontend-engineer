import { atom } from "recoil";
import { FilterValueType } from "data/filterOptions";

const defaultFilterState: Array<FilterValueType> = [];

export const filterState = atom({
  key: "filterState",
  default: defaultFilterState,
});
