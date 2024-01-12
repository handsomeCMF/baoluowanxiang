import { call, take, takeEvery } from 'redux-saga/effects';
import axios from '@services/axiosInstance';
import { GET_GAME_TAB, GET_CHARACTER_BY_GAME } from './gameTabType';

interface ResponseGenerator{
  data: any,
  respCode: number,
  errMsg: string,
}

function* getGameTab() {
  const { payload } = yield take(GET_GAME_TAB);
  const result: ResponseGenerator = yield call(axios.get, '/Mihayou/getGames');
  if (result.data.respCode === 0) {
    payload?.callback?.(result.data);
  }
}

function* getCharacter (action: any) {
  const result: ResponseGenerator = yield call(axios.get, '/Mihayou/getCharacter');
  if (result.data.respCode === 0) {
    action.payload?.callback?.(result.data);
  }
}

function* getCharacterByGame() {
  yield takeEvery(GET_CHARACTER_BY_GAME, getCharacter);
}

// function* getCharacterByGame() {
//   while(true) {
//     const { payload } = yield take(GET_CHARACTER_BY_GAME);

//     const result: ResponseGenerator = yield call(axios.get, '/Mihayou/getCharacter');
//     if (result.data.respCode === 0) {
//       payload?.callback?.(result.data);
//     }
//   }
// }

export const gameTabSaga = {
  getGameTab,
  getCharacterByGame,
};