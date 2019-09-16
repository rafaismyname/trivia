import { takeLatest, all } from 'redux-saga/effects';
import { GameTypes } from './Game/Actions';
import * as GameSaga from './Game/Sagas';

export default function* root() {
  yield all([
    takeLatest(GameTypes.RESET_GAME, GameSaga.resetGame),
  ]);
}
