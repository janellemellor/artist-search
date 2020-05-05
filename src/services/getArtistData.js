export const fetchArtists = (artistName, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&offset=${page}`)
    .then(res => res.json())
    .then(json => json.artists.map(artist => ({  
      id: artist.id,
      name: artist.name
    })));
};
