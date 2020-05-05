import React from 'react';
import { shallow } from 'enzyme';
import Artists from '../Artists/Artists.jsx';

describe('Artists', () => {
  it('matches the Artists snapshot', () => {
    const artistResults = [
      {
        id: 'a3cb23fc-acd3-4ce0-8f36-1e5aa6a18432',
        name: 'U2'
      },
      {
        id: 'b613c677-42e5-47e8-abcd-820c48f17447',
        name: 'U2 Zoo'
      }
    ];

    const wrapper = shallow(<Artists artistResults={artistResults} />);
    expect(wrapper).toMatchSnapshot();
  });
});

