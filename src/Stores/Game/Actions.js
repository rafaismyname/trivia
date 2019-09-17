import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  newGame: null,
  updateGameQuestions: ['questions'],
  setGameCurrentQuestion: ['index', 'question'],
  chooseGameCurrentAnswer: ['answer'],
  setGameCurrentAnswer: ['answer', 'correct'],
  nextGameQuestion: null,
  resetGame: null,
});

export const GameTypes = Types;
export default Creators;
