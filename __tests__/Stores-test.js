import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import GameActions from '../src/Stores/Game/Actions';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const mockStore = configureStore(middlewares);

describe('Test the store', () => {
  it('expect that action generators are working properly', () => {
    const action = GameActions.newGame();

    expect(action).toEqual({ type: 'NEW_GAME' });
  });

  it('expect that store is working properly', () => {
    const store = mockStore({});

    store.dispatch(GameActions.newGame());
    const actualActions = store.getActions().map(action => action.type);
    const expectedActions = ['NEW_GAME'];

    expect(actualActions).toEqual(expectedActions);
  });
});
