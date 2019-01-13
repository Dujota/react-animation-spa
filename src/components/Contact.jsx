import React, { Component } from 'react';
import '../styles/Contact.scss';

class Contact extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    console.log('Contact mounted');
    this.props.showNavBar && this.props.toggleNavBarDisplay();
  };

  componentWillUnmount = () => {
    console.log('Contact unmounted');
  };

  render() {
    return (
      <div id="contact">
        <div className="overlay">
          <div className="ui container">Contact Form here</div>
        </div>
      </div>
    );
  }
}

export default Contact;
