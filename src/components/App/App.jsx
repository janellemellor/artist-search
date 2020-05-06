import React from 'react';
import {
  Route, 
  Switch, 
  BrowserRouter as Router,
} from 'react-router-dom';
import ArtistSearch from '../../containers/ArtistSearch/ArtistSearch.jsx';
import AlbumDisplay from '../../containers/AlbumDisplay/AlbumDisplay.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={ArtistSearch} />
        <Route exact path="/:querySearch" component={ArtistSearch} />
        <Route exact path="/:artist/:id" component={AlbumDisplay}/>
      </Switch>
    </Router>
  );
}
