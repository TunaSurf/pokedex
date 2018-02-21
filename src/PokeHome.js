import React, { Component } from 'react';
import './PokeHome.css';
import Searchbar from './Searchbar';
import PokeList from './PokeList';
import loader from './pokeball_loader.svg'

var Pokedex = require('pokeapi-js-wrapper');

var options = {
  protocol: 'https',
  versionPath: '/api/v2/',
  cache: true,
}
var P = new Pokedex.Pokedex(options);

class PokeHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      pokemonAfterFilter: [],
      pokeSearch: "",
      listLoaded: false
    }
    this.handleChange = this.handleChange.bind(this);
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
          pokemonAfterFilter: pokemon,
          listLoaded: true
        });
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

  handleToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    let pokeList = <img src={loader} className="loader" alt="Loading"></img>
    if (this.state.listLoaded) {
      pokeList = <PokeList
        value={this.state.pokeSearch}
        pokemon={this.state.pokemonAfterFilter}
      />
    }

    return (
      < div className = "pokeHome" >
        <Searchbar
          value={this.state.pokeSearch}
          onChange={this.handleChange}
        />
        {pokeList}
        <div className="fixed-action-btn" onClick={this.handleToTop}>
          <a className="btn-floating btn-large waves-effect deep-purple accent-1">
            <i className="material-icons">keyboard_arrow_up</i>
          </a>
        </div>
      </div >
    )
  }
}

export default PokeHome;