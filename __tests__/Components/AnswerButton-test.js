import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import AnswerButton from '../../src/Components/AnswerButton';

const initialProps = {
  title: 'Test',
  value: 'test',
  callback: jest.fn(),
};

const setup = (props = initialProps) => shallow(<AnswerButton {...props} />);

describe('Test AnswerButton component', () => {
  let wrapper = setup();

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should properly trigger action when click button', () => {
    const answerBtn = wrapper.find('ButtonComponent').first();
    answerBtn.props().onPress();

    expect(initialProps.callback).toHaveBeenCalled();
  });

  it('should ignore click when already answered', () => {
    initialProps.callback.mockClear();
    wrapper.setProps({ answer: 'True' });

    const answerBtn = wrapper.find('ButtonComponent').first();

    answerBtn.simulate('press');
    expect(initialProps.callback).not.toHaveBeenCalled();
  });
});
