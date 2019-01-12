import React, { Component } from 'react';
import NavBar from './NavBar';

class App extends Component {
  state = {
    showNavBar: true
  };
  toggleNavBarDisplay = () => {
    this.setState({ showNavBar: !this.state.showNavBar });
  };
  render() {
    const { showNavBar } = this.state;
    return (
      <React.Fragment>
        <NavBar
          showNavBar={showNavBar}
          toggleNavBarDisplay={this.toggleNavBarDisplay}
        />
      </React.Fragment>
    );
  }
}

export default App;
