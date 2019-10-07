import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import local from '../../data/local'

describe('Menu', () => {
  let wrapper
  const mockUpdateData = jest.fn();
  
  beforeEach(() => {
    wrapper = shallow(<Menu
      key='local'
      text='local'
      dataSets={ { local: local } }
      updateData={mockUpdateData}
      />);
    });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should run updateData when button is clicked', () => {
    wrapper.find('li').simulate('click');
    expect(mockUpdateData).toHaveBeenCalledWith(local);
  });
})