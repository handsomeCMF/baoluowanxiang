import { all } from 'redux-saga/effects';
import { gameTabSaga } from './gameTab/gameTabSagas';

export default function* rootSaga() {
  yield all([
    gameTabSaga.getGameTab(),
    gameTabSaga.getCharacterByGame()
  ]);
}