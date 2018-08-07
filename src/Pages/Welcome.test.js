import React from 'react';
import { shallow } from 'enzyme';

import Welcome from './Welcome';

it('Welcome should render', ()=> {
  const wrapper = shallow(<Welcome />);
  expect(wrapper).toHaveLength(1);
});
