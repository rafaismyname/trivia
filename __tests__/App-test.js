import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('Test App', () => {
  const wrapper = shallow(<App/>);

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
