import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let wrapper
  const mockSearchArticles = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchForm searchArticles={mockSearchArticles} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})