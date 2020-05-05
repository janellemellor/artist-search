export const fetchArtists = (artistName, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistName}&fmt=json&offset=${offset}`)
    .then(res => res.json())
    .then(json => json.artists.map(artist => ({  
      id: artist.id,
      name: artist.name
    })));
};

export const fetchAlbums = (artistId, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&offset=${offset}`)
    .then(res => res.json())
    .then(json => json.releases.map(release => ({
      id: release.id,
      title: release.title,
      coverArt: release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front` : 'https://placedog.net/640/480?random'
    })));
};
