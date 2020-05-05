import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ handlePageChange, page, artistResults }) => (
  <section> 
    <button onClick={() => handlePageChange(-25)} disabled={page === 0}>&lt;</button>
    <button onClick={() => handlePageChange(25)} disabled={artistResults.length < 25}>&gt;</button>
  </section>  
);

Paging.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  artistResults: PropTypes.array.isRequired
};

export default Paging;


