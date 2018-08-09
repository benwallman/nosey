import React from 'react';
import { shallow } from 'enzyme';

import Listen from './Listen';

describe('Listen', ()=> {
  it('should render an input for backwards compatibility', ()=> {
    const wrapper = shallow(<Listen />);
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
