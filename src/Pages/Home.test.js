import React from 'react';
import { mount, shallow } from 'enzyme';

import Home from './Home';

it('Home should render', ()=> {
  const wrapper = shallow(<Home />);
  expect(wrapper).toHaveLength(1);
});

it('should contain three buttons', ()=> {
  const wrapper = mount(<Home />);
  expect(wrapper.find('Button')).toHaveLength(3)
});
