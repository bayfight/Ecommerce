import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';



class StoreHome extends Component {
    render() {
        return (
            <React.Fragment>
            
            <div className="container-fluid bgToko">
            <Zoom bottom>
                <div className="container">
                    <div className="col-lg-12 col-sm-12">
                        <h1 className="text-white pt-4 text-center">Let's Coeme To Our Store</h1>
                        <div className="row">

                            <div className="col-lg-4 mt-4">
                                <div className="card-body">
                                    <div className="iconStore"><i className="fas fa-store fa-5x pt-5 pl-5"></i></div>
                                    <h6 className="card-subtitle mb-2 text-muted text-white">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-4">
                                <div className="card-body">
                                    <div className="iconStore"><i className="fas fa-store fa-5x pt-5 pl-5"></i></div>
                                    <h6 className="card-subtitle mb-2 text-muted text-white">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mb-5">
                                <div className="card-body">
                                    <div className="iconStore"><i className="fas fa-store fa-5x pt-5 pl-5"></i></div>
                                    <h6 className="card-subtitle mb-2 text-muted text-white">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Zoom>
            </div>
            
            </React.Fragment>
        );
    }
}

export default StoreHome;