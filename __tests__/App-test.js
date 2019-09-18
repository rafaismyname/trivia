import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('Test App', () => {
  it('renders correctly', () => {
    const renderResult = shallow(<App/>);
    expect(renderResult).toMatchSnapshot();
  });
});
