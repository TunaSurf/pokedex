import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  render() {
    return(
      <div>
        <input
          type="text"
          name="pokeSearch"
          placeholder="Search Pokemon"
          value={this.props.value}
          autoComplete="off"
          onChange={this.props.onChange}
        />
        <button type="button">Filters</button>
      </div>
    )
  };
};

export default Searchbar;