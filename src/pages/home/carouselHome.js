import React, { Component } from 'react';


class CarouselHome extends Component {
  render() {
    return (

<div className="container-fluid caros">
        <div className="container mt-2">
            <div className="col-lg-12 col-sm-12">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="images/Banner-discount/banner-1.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/Banner-discount/banner-2.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/Banner-discount/banner-3.jpg" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/Banner-discount/banner-4.jpg" alt="Forth slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
    export default CarouselHome;