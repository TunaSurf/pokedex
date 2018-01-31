import React, { Component } from 'react';
import './DetailsHead.css'

class DetailsHead extends Component {
  render() {    
    const type = this.props.types.slice(0).reverse().map((type,i) => (
      <h3 className={type.type.name} key={i}>
        {type.type.name}
      </h3>
    ));

    return (
      <div>
        <h1>{this.props.name} <span>{this.props.id}</span></h1>
        <p>{this.props.genus}</p>
        <img src={this.props.image} alt={this.props.name}/>
        {type}
        <p>{this.props.flavorText}</p>
      </div>
    )
  };
};

export default DetailsHead;