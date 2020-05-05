import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ onPageChange, offset, artistResults }) => (
  <section> 
    <button onClick={() => onPageChange(-25)} disabled={offset === 0}>&lt;</button>
    <button onClick={() => onPageChange(25)} disabled={artistResults.length < 25}>&gt;</button>
  </section>  
);

Paging.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  artistResults: PropTypes.array.isRequired
};

export default Paging;


