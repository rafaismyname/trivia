import { put, select, delay } from 'redux-saga/effects';
import TriviaApiService from '../../Services/TriviaApiService';
import NavigationService from '../../Services/NavigationService';
import GameActions from './Actions';

export function* newGame() {
  // fetch questions from OTDB
  const questions = yield TriviaApiService.fetchQuestions();
  yield put(GameActions.updateGameQuestions(questions));

  // set first question as current
  const currentQuestion = questions[0];
  yield put(GameActions.setGameCurrentQuestion(0, currentQuestion));

  // begin game!
  NavigationService.navigateAndReset('GameScreen');
}

export function* chooseAnswer({ answer }) {
  // check if question is already answered
  const getCurrentAnswer = (state) => state.game.get('currentAnswer');
  const currentAnswer = yield select(getCurrentAnswer);
  if (currentAnswer.size) {
    return; // if already answered, ignore command;
  }

  // get current question to check if answer is correct
  const getCurrentQuestion = (state) => state.game.get('currentQuestion');
  const currentQuestion = yield select(getCurrentQuestion);

  const parsedAnswer = answer ? 'True' : 'False'; // OTDB uses strings instead of bool
  const isCorrect = parsedAnswer === currentQuestion.get('correct_answer');

  // set current answer
  yield put(GameActions.setGameCurrentAnswer(parsedAnswer, isCorrect));

  // wait a bit and move on to next question
  yield delay(2000);
  yield put(GameActions.nextGameQuestion());
}

export function* nextGameQuestion() {
  // get current question index
  const getCurrentQuestionIndex = (state) => state.game.get('currentQuestionIndex');
  const currentQuestionIndex = yield select(getCurrentQuestionIndex);
  const nextQuestionIndex = currentQuestionIndex + 1;

  // get questions
  const getQuestions = (state) => state.game.get('questions');
  const questions = yield select(getQuestions);

  // if there is no more questions, "game over!" and go to results screen
  if (nextQuestionIndex >= questions.size) {
    return NavigationService.navigateAndReset('ResultScreen');
  }

  const currentQuestion = questions.get(nextQuestionIndex);
  yield put(GameActions.setGameCurrentQuestion(nextQuestionIndex, currentQuestion));
}

export function resetGame() {
  NavigationService.navigateAndReset('MainScreen');
}
