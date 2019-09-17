import { createSelector } from 'reselect';

const questionsSelector = state => state.game.get('questions');
const answersSelector = state => state.game.get('answers');
const currentQuestionIndexSelector = state => state.game.get('currentQuestionIndex');
const currentQuestionSelector = state => state.game.get('currentQuestion');
const currentAnswerSelector = state => state.game.get('currentAnswer');

const questionsSize = createSelector(
  questionsSelector,
  (questions) => questions.size
);

const currentQuestion = createSelector(
  currentQuestionSelector,
  (question) => question.toJS()
);

const currentQuestionNumber = createSelector(
  currentQuestionIndexSelector,
  (questionIndex) => questionIndex ? questionIndex + 1 : 1
);

const currentAnswer = createSelector(
  currentAnswerSelector,
  (answer) => answer.toJS()
);

const nextQuestionIndex = createSelector(
  currentQuestionIndexSelector,
  questionsSize,
  (currentQuestionIndex, limit) => {
    const nextIndex = currentQuestionIndex === null ? 0 : currentQuestionIndex + 1;

    if (nextIndex >= limit) {
      return false;
    }

    return nextIndex;
  }
);

const nextQuestion = createSelector(
  nextQuestionIndex,
  questionsSelector,
  (questionIndex, questions) => {
    if (questionIndex === false) {
      return false;
    }

    return questions.get(questionIndex);
  }
);

const allAnswers = createSelector(
  answersSelector,
  (answers) => answers.toJS()
);

const score = createSelector(
  answersSelector,
  (answers) => answers.count(answer => answer.get('correct'))
);

export default {
  questionsSize,
  currentQuestion,
  currentQuestionNumber,
  currentAnswer,
  nextQuestionIndex,
  nextQuestion,
  allAnswers,
  score,
};
