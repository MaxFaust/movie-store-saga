import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details'

import {HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>BlockBusted</h1>
        </header>
        <Router>
          <Route exact path="/" component={Home}/>
          <Route path="/details" component={Details}/>
          {/* <Route path="/edit" component={Edit}/> */}
        </Router>
      </div>
    );
  }
}

export default App;
