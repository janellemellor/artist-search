import Artist from '../Artists/Artist.jsx';
import withList from '../withLists.js';

const Artists = withList(Artist, 'artistResults');

export default Artists;
