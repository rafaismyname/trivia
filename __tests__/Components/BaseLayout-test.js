import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import BaseLayout from '../../src/Components/BaseLayout';

describe('Test BaseLayout component', () => {
  const wrapper = shallow(
    <BaseLayout>
      <Text>This is a test!</Text>
    </BaseLayout>
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
