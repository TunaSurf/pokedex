import React, { Component } from 'react';
import Searchbar from './Searchbar';
import PokeList from './PokeList';
import Filters from './Filters';

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
      showFilters: false,
      typeFilterValue: "bug",
      listLoaded: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleShowFilters = this.handleShowFilters.bind(this);
    this.handleTypeFilterChange = this.handleTypeFilterChange.bind(this);
    this.handleTypeFilterSubmit = this.handleTypeFilterSubmit.bind(this);
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

  handleShowFilters() {
    this.setState((prevState) => {
      return { showFilters: !prevState.showFilters };
    });
  }

  handleTypeFilterChange(e) {
    this.setState({ typeFilterValue: e.target.value })
  }

  handleTypeFilterSubmit() {
    this.setState({ listLoaded: false })
    P.getTypeByName(this.state.typeFilterValue)
      .then(data => {
        const pokemon = data.pokemon;
        pokemon.forEach((poke) => {
          poke.id = poke.pokemon.url.replace(/https:\/\/pokeapi.co\/api\/v2\/pokemon\//, '').slice(0, -1);
          poke.name = poke.pokemon.name;
          poke.url = poke.pokemon.url;
        });
        const pokemonAfterFilter = pokemon.filter(poke => poke.id < 10000);  //filter out alternate forms (mega, aloha, etc.)
        this.setState({ pokemonAfterFilter, pokeSearch: "", listLoaded: true });
      });
  }

  render() {
    let pokeList = <div className="loading">Loading...</div>
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
          onClick={this.handleShowFilters}
        />
        <Filters
          showFilters={this.state.showFilters}
          onChange={this.handleTypeFilterChange}
          onClick={this.handleTypeFilterSubmit}
        />
        {pokeList}
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large waves-effect deep-purple accent-1">
            <i className="material-icons">keyboard_arrow_up</i>
          </a>
        </div>
      </div >
    )
  }
}

export default PokeHome;