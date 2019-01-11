import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="ui container">
        <div id="icons">
          <button className="ui blue basic button">Blue</button>
          <button className="ui violet basic button">Violet</button>
          <button className="ui purple basic button">Purple</button>
          <button className="ui pink basic button">Pink</button>
        </div>
      </div>
    );
  }
}
