import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toHaveLength(1);
});

describe('Home page', () => {
  beforeEach(() => {
    Object.defineProperty(global.location, 'href', {
      writable: true,
      value: 'https://www.somthing.com/home'
    });
  });
  it('should render if the url contains home', ()=> {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Home')).toHaveLength(1);
    expect(wrapper.find('Welcome')).toHaveLength(0);
  });
});

describe('Welcome page', () => {
  beforeEach(() => {
    Object.defineProperty(global.location, 'href', {
      writable: true,
      value: 'https://www.somthing.com/welcome'
    });
  });
  it('should render if the url contains welcome', ()=> {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Welcome')).toHaveLength(1);
    expect(wrapper.find('Home')).toHaveLength(0);
  });
});

afterEach(() => {
  Object.defineProperty(global.location, 'href', {
    writable: true,
    value: 'https://www.somthing.com/'
  });
});