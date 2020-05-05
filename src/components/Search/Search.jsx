import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ onSubmit, onChange }) => (
  <>
    <form onSubmit={onSubmit}>
      <fieldset>
        <input type="text" name="artist-search" value="name" onChange={onChange}  />
        <button>Find Artist!</button>
      </fieldset>
    </form>
  </>
);

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  onChange: PropTypes.func.isRequired, 
};

export default Search;
