import React from 'react';
import { shallow } from 'enzyme';
import { GameScreen } from '../../src/Containers/Game/GameScreen';

const initialProps = {
  questionsSize: 1,
  currentQuestionNumber: 1,
  currentQuestion: {
    category: 'Test Category',
    question: 'Is this a test?',
  },
  currentAnswer: {},
  chooseAnswer: jest.fn(),
};

const setup = (props = initialProps) => shallow(<GameScreen {...props} />);

describe('Test GameScreen container', () => {
  const wrapper = setup();

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have at least two answer buttons', () => {
    const answerBtns = wrapper.find('AnswerButton');
    expect(answerBtns.length).toBeGreaterThanOrEqual(2);
  });

  it('should properly trigger action when click answer button', () => {
    const answerBtn = wrapper.find('AnswerButton').first();
    answerBtn.props().callback();

    expect(initialProps.chooseAnswer).toHaveBeenCalled();
  });
});
