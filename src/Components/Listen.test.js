import React from 'react';
import { shallow } from 'enzyme';

import Listen from './Listen';

const spy = jest.fn().mockImplementation(() => Promise.resolve());

global.navigator.mediaDevices =  {
  getUserMedia: spy,
};

global.URL = {
  createObjectURL: () => {},
};

describe('Listen', ()=> {
  it('should render an audio element for playing back sound', ()=> {
    const wrapper = shallow(<Listen />);
    expect(wrapper.find('audio')).toHaveLength(1);
  });
  it('should attempt to access the windows audio device', ()=> {
    const wrapper = shallow(<Listen />);
    expect(spy).toBeCalledWith({ audio: true, video: false });
  });
});
