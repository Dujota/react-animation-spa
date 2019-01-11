import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// Components & Styles
import '../styles/NavBar.scss';

export default class NavBar extends Component {
  render() {
    return (
      <div className="ui container">
        <div id="icons">
          <span>
            <button className="ui blue basic button">Home</button>
          </span>

          <span>
            <button className="ui violet basic button">About</button>
          </span>

          <span>
            <button className="ui purple basic button">Contact</button>
          </span>

          <span>
            <button className="ui pink basic button">Media</button>
          </span>
        </div>
      </div>
    );
  }
}
