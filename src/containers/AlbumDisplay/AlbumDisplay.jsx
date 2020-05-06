import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAlbums } from '../../services/getArtistData.js';
import Albums from '../../components/Albums/Albums.jsx';
import Paging from '../../components/Paging/Paging.jsx';

const AlbumDisplay = () => {
  const [offset, setOffset] = useState(0);
  const [albumResults, setAlbumResults] = useState([]);

  const { id } = useParams();
  
  useEffect(() => {
    fetchAlbums(id, offset)
      .then(res => setAlbumResults(res));
  }, [offset]);

  const handlePageChange = (by) => { setOffset(prevPage => prevPage + by);
  };

  return (
    <>  
      <Paging onPageChange={handlePageChange} offset={offset} artistResults={albumResults} />
      <Albums albumResults={albumResults} /> 
    </>
  );
};

export default AlbumDisplay;

