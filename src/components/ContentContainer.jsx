import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ContentContainer.scss';
// import '../styles/About.scss';

class ContentContainer extends Component {
  render() {
    const { subject, header, children } = this.props;

    return (
      <div className="overlay">
        <div className={`ui container ${subject}-container`}>
          {/* CLOSE BUTTON */}
          <section className="close-button-container">
            <a href="/" className="ui secondary button close-button">
              Close
            </a>
          </section>

          {/* HEADER */}
          <section className="ui header title">
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
  subject: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired
};

export default ContentContainer;
