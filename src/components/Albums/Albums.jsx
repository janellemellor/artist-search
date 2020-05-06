import Album from '../Albums/Album.jsx';
import withList from '../withLists.js';

const Albums = withList(Album, 'albumResults');

export default Albums;

