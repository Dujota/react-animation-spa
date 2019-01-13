import React, { Component } from 'react';
import '../styles/Media.scss';

class Media extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    console.log('Media mounted');
    this.props.showNavBar && this.props.toggleNavBarDisplay();
  };

  componentWillUnmount = () => {
    console.log('Media unmounted');
  };

  render() {
    return (
      <div id="media">
        <div className="overlay">
          <div className="ui container">Media Gallery here</div>
        </div>
      </div>
    );
  }
}

export default Media;
