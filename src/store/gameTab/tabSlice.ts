import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface tabState {
  selectedTab: number,
}
const initialState : tabState = {
  selectedTab: 0,
};

export const tabSlice = createSlice({
  name: 'gameTab',
  initialState,
  reducers: {
    changeTab: (state, action: PayloadAction<number>) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { changeTab } = tabSlice.actions;
export default tabSlice.reducer;