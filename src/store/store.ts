import { configureStore } from '@reduxjs/toolkit';
import tabSlice from './gameTab/tabSlice';

const store = configureStore({
  reducer: {
    tabReducer: tabSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
