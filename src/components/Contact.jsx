import React, { Component } from 'react';
import '../styles/Contact.scss';
import ContentContainer from './ContentContainer';

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
        <ContentContainer header={'Contact'} path={'/'}>
          <h3 className="ui header intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, animi
            deleniti. Dolor laborum impedit tempora minus adipisci quia tenetur
            officiis dolores at, possimus atque earum doloribus dolore tempore
            dicta qui.
          </h3>

          <form className="ui form">
            <div className="field">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="field">
              <input type="text" name="email" placeholder="Email Address" />
            </div>

            <div className="field">
              <textarea placeholder="Shoot me a Line!" />
            </div>
          </form>
        </ContentContainer>
      </div>
    );
  }
}

export default Contact;
