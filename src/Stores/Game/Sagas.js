import { put, select, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';
import i18n from '../../Locales/i18n';
import TriviaApiService from '../../Services/TriviaApiService';
import NavigationService from '../../Services/NavigationService';
import GameActions from './Actions';
import GameSelectors from './Selectors';

export function* newGame() {
  try {
    // fetch questions from OTDB
    const questions = yield TriviaApiService.fetchQuestions();
    yield put(GameActions.updateGameQuestions(questions));

    // init first question
    yield put(GameActions.nextGameQuestion());

    // begin game!
    NavigationService.navigateAndReset('GameScreen');
  } catch (e) {
    // if fetching from OTDB fails, alert user about error and reset game
    const errorMsg = e && e.message || i18n.t('general.unknown');
    const alertMsg = `${i18n.t('general.errorMessage')}\n(${errorMsg})`;
    Alert.alert('Oooops :(', alertMsg, [], { cancelable: true });

    yield put(GameActions.resetGame());
  }
}

export function* chooseAnswer({ answer }) {
  // check if question is already answered
  const currentAnswer = yield select(GameSelectors.currentAnswer);
  if (currentAnswer.answer) {
    return; // if already answered, ignore command;
  }

  // get current question to check if answer is correct
  const currentQuestion = yield select(GameSelectors.currentQuestion);

  // check if answer matches correct answer
  const isCorrect = answer === currentQuestion.correctAnswer;

  // set current answer
  yield put(GameActions.setGameCurrentAnswer(answer, isCorrect));

  // wait a bit and move on to next question
  yield delay(2000);
  yield put(GameActions.nextGameQuestion());
}

export function* nextGameQuestion() {
  // get next question and its index
  const nextQuestionIndex = yield select(GameSelectors.nextQuestionIndex);
  const nextQuestion = yield select(GameSelectors.nextQuestion);

  // if there is no more questions, "game over!" and go to results screen
  if (!nextQuestion) {
    return NavigationService.navigateAndReset('ResultScreen');
  }

  yield put(GameActions.setGameCurrentQuestion(nextQuestionIndex, nextQuestion));
}

export function resetGame() {
  // reset game state and go to main screen
  NavigationService.navigateAndReset('MainScreen');
}
