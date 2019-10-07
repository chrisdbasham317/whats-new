import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import local from '../../data/local'

describe('Menu', () => {
  let wrapper
  // const mockSearchArticles = jest.fn();
  // const mockEvent = {
    // target: {
    //   value: 'capitol hill',
    //   preventDefault: jest.fn()
    // }
  // };

  beforeEach(() => {
    wrapper = shallow(<Menu
      key='local'
      text='local'
      dataSets={local}
      updateData={jest.fn()}
      />);
    });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})