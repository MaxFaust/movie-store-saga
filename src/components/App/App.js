import React, { Component } from 'react';
import './App.css';

import MovieList from '../MovieList/MovieList';
import Details from '../MovieItem/MovieItem';
import EditPage from '../EditMovie/EditMovie';
import {HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MOVIE WORLD</h1>
        </header>
        <Router>
          <Route exact path="/" component={MovieList}/>
          <Route path="/details/:id" component={Details}/>
          <Route path="/edit/:id" component={EditPage}/>
        </Router>
      </div>
    );
  }
}

export default App;
