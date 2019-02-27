import React, { Component } from 'react';
import Breadcrumb from './breadcumb';
import CardCategory from './cardCategoryGreenbean';
import axios from 'axios';

class GreenBean extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coffe: []
        }
    }

    componentDidMount = (e) => {
        let url = 'http://localhost:3020/greenbeanf'
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

                <div className="container-fluid bg-white">
                    <div className="container">

                        <Breadcrumb />

                        <div className="container">
                            <div className="col-lg-12">
                            <div className="row">
                                    {product}
                                    </div>
                            </div>
                        </div>
                    </div>

                    
                </div>



  


            </React.Fragment >
        )
    }
}
export default GreenBean