import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Album = ({title,}) => (
  <section>
    <h3>{title}</h3>
    <
  </section>
);

Album.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  coverArt: PropTypes.string.isRequired,
};

export default Album;
