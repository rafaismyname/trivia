import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  resetGame: null,
});

export const GameTypes = Types;
export default Creators;
