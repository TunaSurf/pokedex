import React, { Component } from 'react';
import './PokeDetails.css';

class PokeDetails extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.name}
      </div>
    )
  };
};

export default PokeDetails;