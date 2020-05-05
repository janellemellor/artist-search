// import React from 'react';
import Artist from '../Artists/Artist.jsx';
import withList from '../withLists.js';

const Artists = withList(Artist, 'name');

export default Artists;
