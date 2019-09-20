import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import AnswerButton from '../../src/Components/AnswerButton';

describe('Test AnswerButton component', () => {
  it('renders correctly', () => {
    const renderResult = shallow(
      <AnswerButton
        title="Test"
        value="test"
        callback={() => {}}
      />
    );
    expect(renderResult).toMatchSnapshot();
  });
});
