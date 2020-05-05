import React, { useState, useEffect } from 'react';
import Search from '../../components/Search/Search.jsx';
import Artists from '../../components/Artists/Artists.jsx';
import { fetchArtists } from '../../services/getArtistData.js';
import { useHistory, useParams } from 'react-router-dom';

const ArtistSearch = () => {
  const [artistSearchQuery, setArtistSearchQuery] = useState('');
  const [artistResults, setArtistResults] = useState([]);

  const history = useHistory();
  const querySearch = useParams();


  // useEffect(() => {
  //   setArtistSearchQuery(querySearch);
  // }, [artistSearchQuery]);

  // useEffect(() => {
  //   fetchArtists(querySearch)
  //     .then(res => setArtistResults(res));
  // }, []);

  const handleChange = ({ target }) => {
    setArtistSearchQuery(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchArtists(artistSearchQuery)
      .then(res => setArtistResults(res));
    // history.push(`/${artistSearchQuery}`);
  }; 

  
   
  return (
    <>
      
      <Search onSubmit={handleSubmit} onChange={handleChange} searchInput={artistSearchQuery} />
      <Artists artistResults={artistResults} />
    </>

  );
};

export default ArtistSearch;
