import React, { Component } from 'react';
import ContentContainer from './ContentContainer';
import '../styles/About.scss';

class About extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    console.log('About mounted');
    this.props.showNavBar && this.props.toggleNavBarDisplay();
  };

  componentWillUnmount = () => {
    console.log('About unmounted');
  };

  render() {
    return (
      <div id="about">
        <ContentContainer header={'DJ NAME'} path={'/'}>
          <h3 className="ui header intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum
            reprehenderit recusandae nemo laudantium sit libero repellat modi,
            laboriosam quibusdam dolorum, culpa magnam. Minus, nostrum.
          </h3>

          <div className="ui cards-segment segment">
            {/* CARD 1 */}
            <section className="ui card about-card">
              <div className="wrapper">
                <h2 className="ui icon header ">
                  <i className="headphones icon" />
                  <div className="content icon-header">
                    Something Cathcy
                    <div className="sub header">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem dicta distinctio deleniti suscipit labore
                      accusantium nisi dolor mollitia magnam animi.
                    </div>
                  </div>
                </h2>
              </div>
            </section>

            {/* Divider */}
            <section className="divider" />

            {/* CARD 2 */}
            <section className="ui card about-card">
              <div className="wrapper">
                <h2 className="ui icon header">
                  <i className="volume up icon" />
                  <div className="content icon-header">
                    Second Catchy Phrase
                    <div className="sub header">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente totam, odio rem odit consequuntur voluptas sunt
                      dolorum corporis. Minima, laudantium?
                    </div>
                  </div>
                </h2>
              </div>
            </section>

            {/* Divider */}
            <section className="divider" />

            {/* CARD 3 */}
            <section className="ui card about-card">
              <div className="wrapper">
                <h2 className="ui icon header">
                  <i className="video icon" />
                  <div className="content icon-header">
                    Some Video thing
                    <div className="sub header">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Atque magni ex fugit reprehenderit deserunt quasi eum hic
                      molestias explicabo est.
                    </div>
                  </div>
                </h2>
              </div>
            </section>
          </div>
        </ContentContainer>
      </div>
    );
  }
}

export default About;
