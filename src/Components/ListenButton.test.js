import React from 'react';
import { mount } from 'enzyme';

import ListenButton from './ListenButton';

describe('ListenButton', ()=> {
  it('should render a button', ()=> {
    const wrapper = mount(<ListenButton onClick={()=> {}}/>);
    expect(wrapper.find('Button')).toHaveLength(1);
  });
});
