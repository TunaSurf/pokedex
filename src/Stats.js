import React, { Component } from 'react';
import './Stats.css'

class Stats extends Component {
  render() {
    const statBars = this.props.stats.slice(0).reverse().map((stat,i) => {
      const barWidth = Math.round((stat.base_stat / 300) * 100);
      const barStyle = {width: barWidth + "%", background: "red"};
      return (
        <div key={i}>
          <div>{stat.stat.name}</div>
          <div>
            <div style={barStyle}>{stat.base_stat}</div>
          </div>
        </div>
      )
    });

    return (
      <div>
        {statBars}
      </div>
    )
  };
};

export default Stats;