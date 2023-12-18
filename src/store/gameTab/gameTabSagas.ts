import { call, put } from 'redux-saga/effects';
import axios from '@services/axiosInstance';

interface ResponseGenerator{
  data: any,
  respCode: number
}

function* getGameTab() {
  const result: ResponseGenerator = yield call(axios.get, '');
  yield put({ type: 'test', payload: result });
}

function* getCharacterByGame() {
  
}

export const gameTabSaga = {
  getGameTab,
  getCharacterByGame
};