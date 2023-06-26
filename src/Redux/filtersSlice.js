import { createSlice } from "@reduxjs/toolkit";

const filters = ''

const filtersSlice = createSlice({
  name: "filters",
  initialState: filters,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;