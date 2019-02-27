import React, { Component } from 'react';
import CarouselHome from './carouselHome';
import Bestseller from './bestSellerHome';
import StoreHome from './storeHome';


class Home extends Component {
    render() {
      return (
        <React.Fragment>
            <CarouselHome/>
            <Bestseller/>
            <StoreHome/>
        </React.Fragment>
      )
    }
}
export default Home