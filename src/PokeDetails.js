import React, { Component } from 'react';
import './PokeDetails.css';
import DetailsHead from './DetailsHead';
import Stats from './Stats';
import Evolution from './Evolution';

var Pokedex = require('pokeapi-js-wrapper');

var options = {
  protocol: 'https',
  versionPath: '/api/v2/',
  cache: true,
}
var P = new Pokedex.Pokedex(options);

class PokeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: 0,
      image: "",
      types: [],
      stats: {},
      flavorText: "",
      genus: "",
      evolutionId: 0,
      evolutionChain: {}
    }
  }

  componentDidMount() {
    P.getPokemonByName(this.props.match.params.name)
      .then(data => {
        const name = data.name,
            id = data.id,
            image = data.sprites.front_default,
            types = data.types,
            stats = data.stats;
        this.setState({
          name,
          id,
          image,
          types,
          stats
        });
      })
      .then(() => P.getPokemonSpeciesByName(this.state.name))
      .then(data => {
        const evolutionId = data.evolution_chain.url.replace(/https:\/\/pokeapi.co\/api\/v2\/evolution-chain\//, '').slice(0, -1);
        let flavorText = "";
        let genus = "";
        for(let i = 0; i < data.flavor_text_entries.length; i++) {
          if(data.flavor_text_entries[i].language.name === "en") {
            flavorText = data.flavor_text_entries[i].flavor_text;
            break;
          }
        }
        for (let i = 0; i < data.genera.length; i++) {
          if (data.genera[i].language.name === "en") {
            genus = data.genera[i].genus;
            break;
          }
        }
        this.setState({ 
          flavorText, 
          genus, 
          evolutionId 
        });
      })
      .then(() => P.getEvolutionChainById(this.state.evolutionId))
      .then(data => {
        const evolutionChain = data.chain;
        console.log(evolutionChain);
        this.setState({ evolutionChain });
      });
  }

  render() {
    let stats = null;
    if(this.state.stats.length > 0) {
      stats = <Stats stats={this.state.stats} />
    }
    let evolution = null;
    if ("evolves_to" in this.state.evolutionChain) {
      evolution = <Evolution evolution={this.state.evolutionChain} />
    }

    return (
      <div>
        <DetailsHead 
          name={this.state.name}
          id={this.state.id}
          image={this.state.image}
          types={this.state.types}
          flavorText={this.state.flavorText}
          genus={this.state.genus}
        />
        {stats}
        {evolution}
      </div>
    )
  };
};

export default PokeDetails;