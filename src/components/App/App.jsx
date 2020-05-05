import React from 'react';
import {
  Route, 
  Switch, 
  BrowserRouter as Router,
} from 'react-router-dom';
import ArtistSearch from '../../containers/ArtistSearch/ArtistSearch.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={ArtistSearch} />
        <Route exact path="/:querySearch" component={ArtistSearch} />
      </Switch>
    </Router>
  );
}
