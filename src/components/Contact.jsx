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

          <div className="ui form">
            <div class="inline fields">
              <div class="eight wide field">
                <label>Contact Details</label>
                <input type="email" placeholder="Email Name" />
              </div>

              <div class="three wide field">
                <input type="text" placeholder="First Name" />
              </div>
              <div class="five wide field">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="field">
              <label>Let me know more about the details</label>
              <textarea />
            </div>
          </div>
        </ContentContainer>
      </div>
    );
  }
}

export default Contact;
