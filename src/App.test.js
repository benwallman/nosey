import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toHaveLength(1);
});

it('should render the Welcome page', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Welcome')).toHaveLength(1)
});

it('should render the home page', ()=> {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Home')).toHaveLength(1)
});
