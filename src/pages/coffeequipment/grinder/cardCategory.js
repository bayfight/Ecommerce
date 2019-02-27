import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cardCategory.css';

class CardCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.cfe2
        }
    }
    render() {
        console.log(this.state.data)

        return (
            <React.Fragment>
                <div className="col-lg-3 pb-5">
                <div className="card" style={{ width: "100%" }}>
                    <img className="card-img-top" src={`http://localhost:3020/getproduct/${this.state.data.nama_gambar}`} alt="card" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.data.product_name}</h5>
                        <p className="card-title">Rp.{this.state.data.price}</p>
                        <button className="btn btn-warning"><Link className="text-white" to={`/grinder/detailGrinder/${this.state.data.id}`} ><i className="fas fa-shopping-cart"></i> Beli</Link></button>
                    </div>
                </div>
                </div>

            </React.Fragment>
        )
    }
}
export default CardCategory