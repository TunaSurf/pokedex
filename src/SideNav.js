import React, { Component } from 'react';
import './SideNav.css';

class SideNav extends Component {
  render() {
    return (
      <ul id="slide-out" className="side-nav">
        <li><h5>Filters</h5></li>
        <li><div className="divider"></div></li>
        <li><a className="dropdown-button" href="#!" data-activates="dropdown-type">Type<i className="material-icons right">arrow_drop_down</i></a></li>
        <ul id='dropdown-type' className='dropdown-content'>
          <li><a href="#!" onChange={this.props.onChange} value="bug">Bug</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="dark">Dark</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="dragon">Dragon</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="electric">Electric</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="fairy">Fairy</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="fighting">Fighting</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="fire">Fire</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="flying">Flying</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="ghost">Ghost</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="grass">Grass</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="ground">Ground</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="ice">Ice</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="normal">Normal</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="poison">Poison</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="psychic">Psychic</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="rock">Rock</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="shadow">Shadow</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="steel">Steel</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="unknown">Unknown</a></li>
          <li><a href="#!" onChange={this.props.onChange} value="water">Water</a></li>
        </ul>
      </ul>
    )
  };
};

export default SideNav;