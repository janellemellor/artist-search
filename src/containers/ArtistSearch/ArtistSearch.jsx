import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/Search/Search.jsx';
import Artists from '../../components/Artists/Artists.jsx';
import { fetchArtists } from '../../services/getArtistData.js';

const ArtistSearch = () => {
  const [artistNameInput, setArtistNameInput] = useState('');
  const [artistResults, setArtistResults] = useState([]);

  const handleChange = ({ target }) => setArtistNameInput(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchArtists(artistNameInput)
      .then(res => setArtistResults(res));
  }; 

   
  return (
    <>
      <Search onSubmit={handleSubmit} onChange={handleChange} searchInput={artistNameInput} />
      <Artists artistResults={artistResults} />
    </>

  );
  
};

export default ArtistSearch;




