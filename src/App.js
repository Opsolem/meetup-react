import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Tabs from './features/tabs';
import { MoviesProps, MoviesState, MoviesLifecycle } from './features/movies';

import './App.css';


const tabs = [
  { label: 'Movies (Props)', path: '/movies/props' },
  { label: 'Movies (State)', path: '/movies/state' },
  { label: 'Movies (Lifecycle)', path: '/movies/lifecycle' },
];

const App = () => (
  <div className="App">
    <Router>
      <React.Fragment>
        <Tabs tabs={tabs} />
        <Switch>
          <Route path="/movies/props" component={MoviesProps} />
          <Route path="/movies/state" component={MoviesState} />
          <Route path="/movies/lifecycle" component={MoviesLifecycle} />
          <Redirect from="/" to="movies/props" />
        </Switch>
      </React.Fragment>
    </Router>
  </div>
);

export default App;
