import React from 'react';
import { shallow } from 'enzyme';
import Paging from '../Paging/Paging.jsx';

describe('Paging component', () => {
  it('matches the Paging snapshot', () => {
    const wrapper = shallow(<Paging handlePageChange={() => {}}artistResults="U2" page={1} />);
    expect(wrapper).toMatchSnapshot();
  });
});
