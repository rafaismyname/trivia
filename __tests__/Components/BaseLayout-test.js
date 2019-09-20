import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import BaseLayout from '../../src/Components/BaseLayout';

describe('Test BaseLayout component', () => {
  it('renders correctly', () => {
    const renderResult = shallow(
      <BaseLayout>
        <Text>This is a test!</Text>
      </BaseLayout>
    );

    expect(renderResult).toMatchSnapshot();
  });
});
