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

  it('should have answer chooser', () => {
    const answers = wrapper.find('AnswerChooser');
    expect(answers).toExist();
  });
});
