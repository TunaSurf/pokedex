import React, { Component } from 'react';
import './DetailsHead.css'

class DetailsHead extends Component {
  render() {  
    const typeLabel = "type-label"  
    const type = this.props.types.slice(0).reverse().map((type,i) => (
      <p className={type.type.name + ' ' + typeLabel} key={i}>
        {type.type.name}
      </p>
    ));

    return (
      <div className="details-head">
        <h1>{this.props.name} <sup>#{this.props.id}</sup></h1>
        <h6>{this.props.genus}</h6>
        <img src={this.props.image} alt={this.props.name}/>
        <div>
          {type}
        </div>
        <p className="flavor-text">{this.props.flavorText}</p>
      </div>
    )
  };
};

export default DetailsHead;