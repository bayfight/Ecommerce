import React, { Component } from 'react';
// import slider from 'react-slick';
import axios from 'axios';
import CardCategory from '../coffe/roastedbean/cardCategory'

class BestSellerHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coffe: []
        }
    }


    componentDidMount = (e) => {
        let url = 'http://localhost:3020/coffe'
        axios.get(url)
            .then((ambil) => {
                this.setState({
                    coffe: ambil.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {

        let product = this.state.coffe.map((val, i) => {

            return (
                <CardCategory key={i} cfe2={val} />

            )
        })
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 mt-3">
                                <h1 className="bestSeller text-center">Our Product</h1>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-12 col-sm-12 mt-3">
                        <h1 className="bestSeller text-center">Coffee</h1>
                    </div>
                    <div className="container">
                        
                <div className="col-lg-12">
                        <div className="row">
                                {product[0]}
                                {product[1]}
                                {product[2]}
                                {product[3]}
                            </div>
                        </div>
                    </div>


                    

                </div>
            </React.Fragment>

        );
    }
}

export default BestSellerHome;