import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ContentContainer.scss';
import { animateCss } from '../utils/animate';

class ContentContainer extends Component {
  componentDidMount() {
    console.log('Containeter mounted');
    animateCss('.title', 'fadeIn');
  }

  componentWillUnmount() {
    console.log('container Unmounted');
  }

  render() {
    const { header, children, path } = this.props;

    return (
      <div className='overlay'>
        <div className={`ui container content-container`}>
          {/* CLOSE BUTTON */}
          <section className='close-button-container'>
            <a href={path} className='ui secondary button close-button'>
              Close
            </a>
          </section>

          {/* HEADER */}
          <section className='ui header title'>
            <h1>{header}</h1>
          </section>

          {/* Content */}

          {children && children}
        </div>
      </div>
    );
  }
}

ContentContainer.propTypes = {
  header: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default ContentContainer;
