import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import PokeList from './PokeList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      pokemonAfterFilter: [],
      pokeSearch: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }


  // ********************
  // How do I cache this?
  // ********************
  componentDidMount() {
    const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/?limit=807';

    fetch(pokemonAPI)
    .then(data => data.json())
    .then(data => {
      const pokemon = data.results;
      pokemon.forEach((poke, index) => {
        poke.id = index + 1;
      });
      const pokemonAfterFilter = pokemon;
      this.setState({pokemon, pokemonAfterFilter});
    });
  }

  handleChange(e) {
    const pokemon = this.state.pokemon;
    const pokemonAfterFilter = pokemon.filter(poke => {
      const name = poke.name;
      const input = e.target.value.toLowerCase();
      return name.includes(input);
    });
    this.setState({
      [e.target.name]: e.target.value,
      pokemonAfterFilter
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Searchbar 
          value={this.state.pokeSearch}
          onChange={this.handleChange}
        />
        <PokeList 
          value={this.state.pokeSearch}
          pokemon={this.state.pokemonAfterFilter}
        />
      </div>
    );
  }
}

export default App;
