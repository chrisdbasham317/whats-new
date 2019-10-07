import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<NewsArticle
      key='3'
      headline='Bananas'
      img='this is an image'
      description='this is a description'
      url= 'this is a url'
      />);
    });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})