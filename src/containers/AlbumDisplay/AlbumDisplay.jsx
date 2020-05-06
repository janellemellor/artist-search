import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAlbums } from '../../services/getArtistData.js';
import Albums from '../../components/Albums/Albums.jsx';
import Paging from '../../components/Paging/Paging.jsx';

const AlbumDisplay = () => {
  const [offset, setOffset] = useState(0);
  const [albumResults, setAlbumResults] = useState([]);

  const { artist } = useParams();
  
  useEffect(() => {
    fetchAlbums(artist, offset)
      .then(res => setAlbumResults(res));
  }, [artist, offset]);

  const handlePageChange = (by) => { setOffset(prevPage => prevPage + by);
  };

  return (
    <>  
      <Paging onPageChange={handlePageChange} offset={offset} albumResults={albumResults} />
      <Albums albumResults={albumResults} /> 
    </>
  );
};

export default AlbumDisplay;

