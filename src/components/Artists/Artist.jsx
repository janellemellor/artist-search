import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artist = ({ name, id }) => (
  <Link to={`/${name}/${id}`} >
    <p>{name}</p>
  </Link>

);

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Artist;

