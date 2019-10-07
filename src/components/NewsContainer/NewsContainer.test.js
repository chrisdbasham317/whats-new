import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';
import local from '../../data/local'

describe('NewsContainer', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<NewsContainer
      data={local}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})