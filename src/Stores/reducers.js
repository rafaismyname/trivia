import { combineReducers } from 'redux';
import { reducer as GameReducer } from './Game/Reducers';

export default combineReducers({
  game: GameReducer,
});
