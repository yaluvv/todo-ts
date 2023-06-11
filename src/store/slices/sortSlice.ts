import { createSlice } from "@reduxjs/toolkit";
import { SortPropEnum, SortType } from "../../types/types";

type initialSortType = {
  sortType: SortType;
};

const initialState: initialSortType = {
  sortType: {
    value: SortPropEnum.ALL,
  },
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    addSort: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const { addSort } = sortSlice.actions;
export default sortSlice.reducer;
