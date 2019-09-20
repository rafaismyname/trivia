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
  it('should render properly', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
