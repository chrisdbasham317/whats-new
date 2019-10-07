import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import local from '../../data/local';
import technology from '../../data/technology';

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change data sets when updateData is called', () => {
    const expected = technology;
    expect(wrapper.state('data')).toEqual(local);
    wrapper.instance().updateData(technology);
    expect(wrapper.state('data')).toEqual(technology);
    expect(wrapper.state('currentCategory')).toEqual(technology);
  });

  
})
