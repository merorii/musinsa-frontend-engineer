import { atom } from "recoil";
import { FilterValueType } from "data/filterOptions";

// interface
const defaultFilterState: Array<FilterValueType> = [];

export const filterState = atom({
  key: "filterState", // unique ID (with respect to other atoms/selectors)
  default: defaultFilterState, // default value (aka initial value)
});
