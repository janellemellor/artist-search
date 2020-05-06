import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Album = ({ title, id, coverArt }) => (
  <section>
    <h3>Album Results</h3>
    <Link to={`/${title}/${id}`} >
      <h3>{title}</h3>
      <img src={coverArt} alt={title} />
    </Link>
  </section>
);

Album.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  coverArt: PropTypes.string.isRequired,
};

export default Album;
