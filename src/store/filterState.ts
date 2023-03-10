import { atom } from "recoil";

import { FilterValueType } from "data/filterOptions";

interface FilterType {
  filter: Array<FilterValueType>;
  remove: Array<string>;
}

const defaultFilterState: FilterType = {
  filter: [],
  remove: [],
};

export const filterState = atom({
  key: "filterState",
  default: defaultFilterState,
});
