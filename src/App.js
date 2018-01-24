import React, { Component } from 'react';
import './App.css';
import Loading from './Loading';
import Navbar from './Navbar';
import PokeHome from './PokeHome';
import { Route } from 'react-router-dom';
import PokeDetails from './PokeDetails';

var Pokedex = require('pokeapi-js-wrapper');

var options = {
  protocol: 'https',
  versionPath: '/api/v2/',
  cache: true,
}
var P = new Pokedex.Pokedex(options);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      listLoaded: false
    }
  }

  componentDidMount() {
    let interval = {
      limit: 802,
      offset: 0
    }

    P.getPokemonsList(interval)
      .then(data => {
        const pokemon = data.results;
        pokemon.forEach((poke) => {
          poke.id = poke.url.replace(/https:\/\/pokeapi.co\/api\/v2\/pokemon\//, '').slice(0, -1);
        });
        this.setState({
          pokemon,
          listLoaded: true
        });
      });
  }

  render() {
    let loading = null;
    if(!this.state.listLoaded) {
      loading = <Loading />
    }

    return (
      <div className="App">
        {loading}
        <Navbar />
        <Route exact={true} path="/" render={props => (
          <PokeHome {...props} pokemon={this.state.pokemon} />
        )}/>
        <Route path="/:name" component={PokeDetails}/>
        
      </div>
    );
  }
}

export default App;
