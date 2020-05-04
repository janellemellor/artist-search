import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/Search/Search.jsx';
import { fetchArtists } from '../../services/getArtistData.js';

const ArtistSearch = () => {
  const [artistNameInput, setArtistNameInput] = useState('');
  const [artistName, setArtistName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchArtists(artistName)
      .then(res => setArtistName(res));
    console.log(artistName);
  }; 

  const handleChange = ({ target }) => setArtistNameInput(target.value);
   
  return (
    <>
      <Search onSubmit={handleSubmit} onChange={handleChange} searchInput={artistNameInput} />
    </>

  );
  
};

export default ArtistSearch;




