import React from 'react';
import './Loading.css'

const Loading = (props) => {
  return (
    <div id="load-container">
      <div className="element" id="electric"></div>
      <div className="element" id="fire"></div>
      <div className="element" id="water"></div>
      <div className="element" id="grass"></div>
    </div>
  )
};

export default Loading;