import { Map, List } from 'immutable';

export const INITIAL_STATE = Map({
  loading: false,
  questions: List(),
  answers: List(),
  currentQuestion: Map(),
});
