import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search.jsx';

describe('Search Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Search 
      onSubmit={() => {}} onChange={() => {}} searchInput="Grouper" />);
    expect(wrapper).toMatchSnapshot();  
  });    
});
