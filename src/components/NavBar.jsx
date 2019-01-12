import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

// Components & Styles
import '../styles/NavBar.scss';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Media from './Media';

export default class NavBar extends Component {
  componentDidMount = () => {
    console.log('NavBarmounted');
    console.log('state', this.state);
  };
  componentWillUnmount = () => {
    console.log('NavBar unmounted');
  };

  render() {
    const { showNavBar } = this.props;
    return (
      <div>
        {/* NAV BAR STARTS HERE */}
        {showNavBar && (
          <nav id="icons" className="ui container">
            <span>
              <Link to="/">
                <button className="ui blue basic button">Home</button>
              </Link>
            </span>

            <span>
              <Link to="/about">
                <button
                  className="ui violet basic button"
                  onClick={this.props.toggleNavBarDisplay}
                >
                  About
                </button>
              </Link>
            </span>

            <span>
              <Link to="/contact">
                <button
                  className="ui purple basic button"
                  onClick={this.props.toggleNavBarDisplay}
                >
                  Contact
                </button>
              </Link>
            </span>

            <span>
              <Link to="/media">
                <button
                  className="ui pink basic button"
                  onClick={this.props.toggleNavBarDisplay}
                >
                  Media
                </button>
              </Link>
            </span>
          </nav>
        )}

        <Route
          exact={true}
          path="/"
          render={() => {
            return (
              <Home
                {...this.props}
                toggleNavBarDisplay={this.props.toggleNavBarDisplay}
              />
            );
          }}
        />
        <Route
          exact={true}
          path="/about"
          render={() => {
            return (
              <About
                {...this.props}
                toggleNavBarDisplay={this.props.toggleNavBarDisplay}
              />
            );
          }}
        />
        <Route
          exact={true}
          path="/contact"
          render={() => {
            return (
              <Contact
                {...this.props}
                toggleNavBarDisplay={this.props.toggleNavBarDisplay}
              />
            );
          }}
        />
        <Route
          exact={true}
          path="/media"
          render={() => {
            return (
              <Media
                {...this.props}
                toggleNavBarDisplay={this.props.toggleNavBarDisplay}
              />
            );
          }}
        />
      </div>
    );
  }
}
