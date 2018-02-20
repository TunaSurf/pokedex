import React, { Component } from 'react';
import './Stats.css'

class Stats extends Component {
  render() {
    const statBars = this.props.stats.slice(0).reverse().map((stat,i) => {
      const barWidth = Math.round((stat.base_stat / 255) * 100);
      const barStyle = { width: barWidth + "%", background: "#b388ff", color: "#efefef", padding: "1px 5px"};
      return (
        <div key={i}>
          <div className="stat-name">{stat.stat.name}</div>
          <div className="statbar">
            <div style={barStyle}>{stat.base_stat}</div>
          </div>
        </div>
      )
    });

    return (
      <div className="stats">
        {statBars}
      </div>
    )
  };
};

export default Stats;