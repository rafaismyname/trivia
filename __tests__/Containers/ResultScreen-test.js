import React from 'react';
import { shallow } from 'enzyme';
import { ResultScreen } from '../../src/Containers/Result/ResultScreen';

const initialProps = {
  answers: [],
  score: 0,
  resetGame: jest.fn(),
};

const setup = (props = initialProps) => shallow(<ResultScreen {...props} />);

describe('Test ResultScreen container', () => {
  const wrapper = setup();

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a start over button', () => {
    const startOverBtn = wrapper.find('ButtonComponent');
    expect(startOverBtn).toExist();
  });

  it('should properly trigger action when click start over', () => {
    const startOverBtn = wrapper.find('ButtonComponent').first();
    startOverBtn.props().onPress();

    expect(initialProps.resetGame).toHaveBeenCalled();
  });
});
