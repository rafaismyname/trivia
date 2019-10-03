import React from 'react';
import { shallow } from 'enzyme';
import AnswerChooser from '../../src/Components/AnswerChooser';

const initialProps = {
  currentQuestion: {
    type: 'boolean',
    answers: ['True', 'False'],
  },
  currentAnswer: {},
  onChoose: jest.fn(),
};

const setup = (props = initialProps) => shallow(<AnswerChooser {...props} />);

describe('Test AnswerChooser component', () => {
  let wrapper = setup();

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

    expect(initialProps.onChoose).toHaveBeenCalled();
  });

  it('should properly render on "multiple type" question', () => {
    const currentQuestion = { type: 'multiple', answers: ['A', 'B', 'C', 'D'] };
    wrapper = setup({ ...initialProps, currentQuestion });
    expect(wrapper).toMatchSnapshot();
  });

  it('should have exact amount of answers options on "multiple type" question', () => {
    const currentQuestion = { type: 'multiple', answers: ['A', 'B', 'C', 'D'] };
    wrapper = setup({ ...initialProps, currentQuestion });
    const answerBtns = wrapper.find('AnswerButton');
    expect(answerBtns.length).toBe(4);
  });
});
