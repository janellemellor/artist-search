import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album.jsx';

describe('Album Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Album title="Opiate" id="002fe68d-3414-4925-a9a6-bc9bc6336b06" coverArt="https://placedog.net/640/480?random" />);
    expect(wrapper).toMatchSnapshot();
  });
});

