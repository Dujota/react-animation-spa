import React, { Component } from 'react';
import './NavBar.scss';

export default class NavBar extends Component {
  render() {
    return (
      <div className="ui container">
        <div id="icons">
          <span>
            <button className="ui blue basic button">Blue</button>
          </span>

          <span>
            <button className="ui violet basic button">Violet</button>
          </span>

          <span>
            <button className="ui purple basic button">Purple</button>
          </span>

          <span>
            <button className="ui pink basic button">Pink</button>
          </span>
        </div>
      </div>
    );
  }
}
