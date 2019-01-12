import React, { Component } from 'react';
import '../styles/Home.scss';

export default class Home extends Component {
  componentDidMount = () => {
    console.log('Home mounted');
    console.log('props', this.props);
  };

  componentWillUnmount = () => {
    console.log('Home unmounted');
  };

  render() {
    return (
      <div id="home">
        <div className="overlay" />
      </div>
    );
  }
}
