export const fetchArtists = (artistName, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&offset=${offset}`)
    .then(res => res.json())
    .then(json => json.artists.map(artist => ({  
      id: artist.id,
      name: artist.name
    })));
};
