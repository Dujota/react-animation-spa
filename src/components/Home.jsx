import React, { Component } from 'react';
import '../styles/Home.scss';

export default class Home extends Component {
  componentDidMount = () => {
    console.log('Home mounted');
    !this.props.showNavBar && this.props.toggleNavBarDisplay();
  };

  componentWillUnmount = () => {
    console.log('Home unmounted');
  };

  render() {
    return (
      <div id="home">
        <div className="home-overlay" />
      </div>
    );
  }
}
