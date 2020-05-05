import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Search from '../../components/Search/Search.jsx';
import Artists from '../../components/Artists/Artists.jsx';
import { fetchArtists } from '../../services/getArtistData.js';
import Paging from '../../components/Paging/Paging.jsx';

const ArtistSearch = () => {
  const [artistSearchQuery, setArtistSearchQuery] = useState('');
  const [artistResults, setArtistResults] = useState([]);
  const [offset, setOffset] = useState(0);

  const history = useHistory();
  const { querySearch }  = useParams();

  useEffect(() => {
    if(querySearch) {
      fetchArtists(querySearch, offset)
        .then(res => setArtistResults(res));
    }}, [querySearch, offset]);

  const handleChange = ({ target }) => {
    setArtistSearchQuery(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${artistSearchQuery}`);
  }; 

  const handlePageChange = (by) => { setOffset(prevPage => prevPage + by);
  };

  return (
    <>      
      <Search onSubmit={handleSubmit} onChange={handleChange} searchInput={artistSearchQuery} />
      <Paging onPageChange={handlePageChange} offset={offset} artistResults={artistResults} />
      <Artists artistResults={artistResults} />
    </>
  );
};

export default ArtistSearch;

