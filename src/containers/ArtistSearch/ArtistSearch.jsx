import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/Search/Search.jsx';
import Artists from '../../components/Artists/Artists.jsx';
import { fetchArtists } from '../../services/getArtistData.js';

const ArtistSearch = () => {
  const [artistNameInput, setArtistNameInput] = useState('');
  const [artistResults, setArtistResults] = useState([]);
  const [page, setPage] = useState(0);

  const handleChange = ({ target }) => setArtistNameInput(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchArtists(artistNameInput, page)
      .then(res => setArtistResults(res));
  }; 

  const handlePageChange = (by) => { setPage(prevPage => prevPage + by);
  };

  useEffect(() => {
    if(page > 0) {
      fetchArtists(artistNameInput, page)
        .then(res => setArtistResults(res));
    }
  }, [page]);
   
  return (
    <>
      <button onClick={() => handlePageChange(-25)} disabled={page === 25}>&lt;</button>
      <button onClick={() => handlePageChange(1)} disabled={artistResults.length < 25}>&gt;</button>
      <Search onSubmit={handleSubmit} onChange={handleChange} searchInput={artistNameInput} />
      <Artists artistResults={artistResults} />
    </>

  );
  
};

export default ArtistSearch;




