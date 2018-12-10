import React, { Component } from 'react';
import Navbar from './Component/navbar';
import CarouselHome from './Component/carouselHome';
import BestSellerHome from './Component/bestSellerHome';
import StoreHome from './Component/storeHome';
import Footer from './Component/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <CarouselHome/>
        <BestSellerHome/>
        <StoreHome/>
        <Footer/>
      </div>
    );
  }
}

export default App;
