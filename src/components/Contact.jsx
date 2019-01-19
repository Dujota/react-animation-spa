import React, { Component } from 'react';
import '../styles/Contact.scss';
import ContentContainer from './ContentContainer';
import { animateCss } from '../utils/animate';

class Contact extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    console.log(animateCss);
    console.log('Contact mounted');
    animateCss('.contact-details', 'fadeInLeft');
    animateCss('.form-content', 'fadeInRight');

    this.props.showNavBar && this.props.toggleNavBarDisplay();
  };

  componentWillUnmount = () => {
    console.log('Contact unmounted');
    animateCss('.contact-details', 'fadeOutRight');
    animateCss('.form-content', 'fadeOutLeft');
  };

  render() {
    return (
      <div id='contact'>
        <ContentContainer header={'Contact'} path={'/'}>
          <div className='contact-content'>
            {/* DETAILS SECTION */}
            <section className='contact-details '>
              <h5 className='contact-me-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                animi deleniti. Dolor laborum impedit tempora minus adipisci
                quia tenetur officiis dolores at, possimus atque earum doloribus
                dolore tempore dicta qui.
              </h5>

              <div className='email-icon'>
                <i className='envelope outline icon' />
                <span className='text-content'>DJName@example.com</span>
              </div>

              <div className='website-icon'>
                <i className='globe icon' />
                <span className='text-content'>www.DJName.com</span>
              </div>

              <div className='facebook-icon'>
                <i className='facebook f icon' />
                <span className='text-content'>DJName Profile Link</span>
              </div>

              <div className='instagram-icon'>
                <i className='instagram icon' />
                <span className='text-content'>@DJName</span>
              </div>
            </section>
            {/* CONTACT FORM  */}
            <section className='form-content '>
              <form className='ui form'>
                <div className='field'>
                  <input type='text' name='name' placeholder='Name' rows='5' />
                </div>
                <div className='field'>
                  <input type='text' name='email' placeholder='Email Address' />
                </div>

                <div className='field'>
                  <textarea placeholder='Shoot me a Line!' />
                </div>

                <button className='ui button submit-button' type='submit'>
                  Send
                </button>
              </form>
            </section>
          </div>
        </ContentContainer>
      </div>
    );
  }
}

export default Contact;
