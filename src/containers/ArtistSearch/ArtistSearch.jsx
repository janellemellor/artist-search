import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/Search/Search.jsx';

const ArtistSearch = () => {
  const [artistNameInput, setArtistNameInput] = useState('');
  const [findArtist, setFindArtist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleChange = ({ target }) => setArtistNameInput(target.value);
   
  return (
    <>
      <Search onSubmit={handleSubmit} onChange={handleChange} searchInput={artistNameInput} />
    </>

  );
  
};

export default ArtistSearch;




