import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist.jsx';

describe('Artist Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Artist name ="U2" />);
    expect(wrapper).toMatchSnapshot();
  });
});
