import React from 'react';
import './Filters.css'

const Filters = (props) => {
  let style = {};
  if (props.showFilters) {
    style.maxHeight = "50px";
  } else {
    style.maxHeight = "0";
  }

  return (
    <div 
      className="filters input-field" 
      style={style}
    >
      <select 
        id="typeFilter" 
        onChange={props.onChange}
      >
        <option value="bug">Bug</option>
        <option value="dark">Dark</option>
        <option value="dragon">Dragon</option>
        <option value="electric">Electric</option>
        <option value="fairy">Fairy</option>
        <option value="fighting">Fighting</option>
        <option value="fire">Fire</option>
        <option value="flying">Flying</option>
        <option value="ghost">Ghost</option>
        <option value="grass">Grass</option>
        <option value="ground">Ground</option>
        <option value="ice">Ice</option>
        <option value="normal">Normal</option>
        <option value="poison">Poison</option>
        <option value="psychic">Psychic</option>
        <option value="rock">Rock</option>
        <option value="shadow">Shadow</option>
        <option value="steel">Steel</option>
        <option value="unknown">Unknown</option>
        <option value="water">Water</option>
      </select>
      <button 
        type="button" 
        id="submitFilters" 
        onClick={props.onClick}
      >
        Filter
      </button>
    </div>
  )
};

export default Filters;