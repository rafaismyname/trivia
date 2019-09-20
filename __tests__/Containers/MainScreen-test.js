import React from 'react';
import { shallow } from 'enzyme';
import { MainScreen } from '../../src/Containers/Main/MainScreen';

const initialProps = {
  loading: false,
  newGame: jest.fn(),
};

describe('Test MainScreen container', () => {
  const wrapper = shallow(<MainScreen {...initialProps} />);
  const render = wrapper.dive();

  it('should render properly', () => {
    expect(render).toMatchSnapshot();
  });

  it('should show new game button while not loading', () => {
    const newGameBtn = render.find('ButtonComponent');
    expect(newGameBtn).toExist();
  });

  it('should trigger newGame whe button is pressed', () => {
    const newGameBtn = render.find('ButtonComponent');
    newGameBtn.first().props().onPress();

    expect(initialProps.newGame).toHaveBeenCalled();
  });

  it('should hide new game button while loading', () => {
    wrapper.setProps({ loading: true });

    const newGameBtn = wrapper.find('ButtonComponent');

    expect(newGameBtn).not.toExist();
  });
});
