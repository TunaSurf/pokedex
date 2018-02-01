import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import PokeHome from './PokeHome';
import PokeDetails from './PokeDetails';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact={true} path="/" component={PokeHome} />
        <Route path="/:name" component={PokeDetails} />
      </div>
    );
  }
}

export default App;