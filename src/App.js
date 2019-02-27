import React, { Component } from 'react';
import Navbar from './Component/navbar';
import Footer from './Component/footer';
import Routes from './route/routes';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
