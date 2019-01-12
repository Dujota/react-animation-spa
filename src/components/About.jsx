import React, { Component } from 'react';
import '../styles/About.scss';

class About extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    console.log('About mounted');
    this.props.toggleNavBarDisplay();
  };

  componentWillUnmount = () => {
    console.log('About unmounted');
  };

  render() {
    // const { center, card, iconSize, segmentChanges, containerSizing } = {
    //   center: {
    //     textAlign: 'center',
    //     margin: '0px',
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)'
    //   },
    //   card: {
    //     display: 'flex',
    //     width: '25%',
    //     height: '80%'
    //   },
    //   iconSize: {
    //     fontSize: '50px'
    //   },
    //   segmentChanges: {
    //     display: 'flex',
    //     backgroundColor: 'rgba(0, 0, 0, 0.1)',
    //     width: '80%',
    //     height: '60%'
    //   },
    //   containerSizing: {
    //     width: '100%',
    //     height: '80%'
    //   }
    // };

    return (
      <div id="about">
        <div className="overlay">
          <div className="ui container">
            <div className="segment">
              <section className="ui card">
                <div>
                  <i className="music icon" />
                </div>

                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  nesciunt hic distinctio ipsam fugit doloremque reiciendis
                  dignissimos at sapiente quas explicabo deleniti, nobis
                  veritatis ut velit excepturi, repudiandae numquam cupiditate.
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
