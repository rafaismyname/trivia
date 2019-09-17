import { Map, List } from 'immutable';

export const INITIAL_STATE = Map({
  loading: false,
  questions: List(),
  currentQuestion: Map(),
  currentQuestionIndex: null,
  answers: List(),
  currentAnswer: Map(),
});
