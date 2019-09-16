import { createReducer } from 'reduxsauce';
import { INITIAL_STATE } from './InitialState';
import { GameTypes } from './Actions';

export const resetGame = () => INITIAL_STATE;

export const reducer = createReducer(INITIAL_STATE, {
  [GameTypes.RESET_GAME]: resetGame,
});
