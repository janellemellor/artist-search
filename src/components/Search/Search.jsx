import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ onSubmit, onChange, searchInput }) => (
  <>
    <form onSubmit={onSubmit}>
      <fieldset>
        <input type="text" name="artist-search" value={searchInput} onChange={onChange}  />
        <button>Find Artist!</button>
      </fieldset>
    </form>
  </>
);

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  onChange: PropTypes.func.isRequired, 
  searchInput: PropTypes.string.isRequired
};

export default Search;
