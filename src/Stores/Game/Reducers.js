import { createReducer } from 'reduxsauce';
import { Map, List } from 'immutable';
import { INITIAL_STATE } from './InitialState';
import { GameTypes } from './Actions';

export const newGame = (state) => {
  return state.merge({
    loading: true,
  });
};

export const updateGameQuestions = (state, { questions }) => {
  return state.merge({
    questions: List(questions),
  });
};

export const setGameCurrentQuestion = (state, { index, question }) => {
  return state.merge({
    loading: false,
    currentQuestion: Map(question),
    currentQuestionIndex: index,
    currentAnswer: Map(),
  });
};

export const setGameCurrentAnswer = (state, { answer, correct }) => {
  const currentAnswers = state.get('answers');
  const currentAnswer = Map({
    answer,
    correct,
    question: state.get('currentQuestion'),
    questionIndex: state.get('currentQuestionIndex'),
  });

  return state.merge({
    loading: false,
    answers: currentAnswers.push(currentAnswer),
    currentAnswer: Map({ answer, correct }),
  });
};

export const resetGame = () => INITIAL_STATE;

export const reducer = createReducer(INITIAL_STATE, {
  [GameTypes.NEW_GAME]: newGame,
  [GameTypes.UPDATE_GAME_QUESTIONS]: updateGameQuestions,
  [GameTypes.SET_GAME_CURRENT_QUESTION]: setGameCurrentQuestion,
  [GameTypes.SET_GAME_CURRENT_ANSWER]: setGameCurrentAnswer,
  [GameTypes.RESET_GAME]: resetGame,
});
