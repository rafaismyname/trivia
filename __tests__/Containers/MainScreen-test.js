import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConnectedMainScreen, { MainScreen } from '../../src/Containers/Main/MainScreen';

const mockStore = configureStore([]);

const initialState = {
  game: {
    loading: false,
  },
};

describe('Test MainScreen container', () => {
  it('renders correctly', () => {
    const renderResult = shallow(<MainScreen />);

    expect(renderResult).toMatchSnapshot();
  });

  it('renders correctly connected', () => {
    const store = mockStore(initialState);

    const renderResult = shallow(
      <Provider store={store}>
        <ConnectedMainScreen />
      </Provider>,
      { context: { store } },
    );

    const innerRenderResult = renderResult.dive();

    expect(innerRenderResult).toMatchSnapshot();
  });
});
