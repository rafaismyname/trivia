import { takeLatest, all } from 'redux-saga/effects';
import { GameTypes } from './Game/Actions';
import * as GameSaga from './Game/Sagas';

export default function* root() {
  yield all([
    takeLatest(GameTypes.NEW_GAME, GameSaga.newGame),
    takeLatest(GameTypes.CHOOSE_GAME_CURRENT_ANSWER, GameSaga.chooseAnswer),
    takeLatest(GameTypes.NEXT_GAME_QUESTION, GameSaga.nextGameQuestion),
  ]);
}
