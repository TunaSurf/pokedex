import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  render() {
    return(
      <div id="search" className="input-field">
        <input
          type="text"
          name="pokeSearch"
          placeholder="Search Pokémon"
          value={this.props.value}
          autoComplete="off"
          onChange={this.props.onChange}
        />
      </div>
    )
  };
};

export default Searchbar;