import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let wrapper
  const mockSearchArticles = jest.fn();
  const mockEvent = { target: { value: 'capitol hill', preventDefault: jest.fn() } };
  
  beforeEach(() => {
    wrapper = shallow(<SearchForm searchArticles={mockSearchArticles} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the searchTerm in state when handleChange is called', () => {
    const expected = { searchTerm: 'capitol hill' };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  it('should run searchArticles when the button is clicked', () => {
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().props.searchArticles).toHaveBeenCalled();
  })
})