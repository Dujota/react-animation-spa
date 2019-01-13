import React, { Component } from 'react';
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
        <div className="overlay">
          <div className="ui container about-container">
            <section className="close-button-container">
              <button className="ui secondary button close-button">
                Close
              </button>
            </section>
            <section className="ui header title">
              <h1>DJ NAME</h1>
            </section>
            <h3 className="ui header intro">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              harum reprehenderit recusandae nemo laudantium sit libero repellat
              modi, laboriosam quibusdam dolorum, culpa magnam. Minus, nostrum.
            </h3>

            <div className="ui cards-segment container">
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

              {/* CARD 3 */}
              <section className="ui card about-card">
                <div className="wrapper">
                  <h2 className="ui icon header">
                    <i className="video icon" />
                    <div className="content icon-header">
                      Some Video thing
                      <div className="sub header">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Atque magni ex fugit reprehenderit deserunt quasi
                        eum hic molestias explicabo est.
                      </div>
                    </div>
                  </h2>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
