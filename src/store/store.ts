import { configureStore } from '@reduxjs/toolkit';
import tabSlice from './gameTab/tabSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tabReducer: tabSlice,
  },
  middleware: [sagaMiddleware]
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
