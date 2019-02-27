import React, { Component } from 'react';
import './detailCategory.css';
import Breadcrumb from '../breadcumb';
import Axios from 'axios';
import { connect } from 'react-redux';

class DetailCategoryGreenbean extends Component {
    constructor(props){
        super(props)
        this.state = {
            detailCategory : "",
            quantity : 1,
        }
    }
    
    componentDidMount () {
        console.log(this.props)
        const id = this.props.match.params.id
        const url = `http://localhost:3020/greenbeanf/${id}`
        Axios.get(url)
            .then((Ambil)=>{
                console.log(Ambil.data)
                this.setState({
                    detailCategory : Ambil.data[0]
                })
            })
    }

    tambah = () =>{
        const { detailCategory, quantity } = this.state;
        if(detailCategory.quantity > quantity) {
            this.setState({
                quantity : quantity + 1
    
            })
        } else {
            alert('Out of Stock');
        }
        
    }
    

    kurang = () => {
        if (this.state.quantity > 1) {
            this.setState({
                quantity: this.state.quantity - 1

            })
        }
    }

    addCart = () =>{
            const id_user1 = this.props.id
            const id_product = this.state.detailCategory.id
            const quantity = this.state.quantity
            const status = 1
            const data = {
                id_user : id_user1,
                id_product : id_product,
                quantity : quantity,
                status : status
            }
            // console.log(id_user)
            const url = 'http://localhost:3020/addToCart'
            Axios.post(url, data)
            .catch(err => {
                console.log(err)
            })
        }


    render() {
        console.log(this.state.detailCategory.nama_gambar)
        console.log(this.state.detailCategory[0])
        
        return (
            <React.Fragment>
                <div className="container-fluid bg-white">
                <div className="container">
                <Breadcrumb />
                </div>
                    
                        <div className="item-container">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="product col-lg-5 ml-3">
                                        <center>
                                            <img id="item-display" src={`http://localhost:3020/getproduct/${this.state.detailCategory.nama_gambar}`} alt="hghjg"></img>
                                        </center>
                                    </div>
                                </div>
                                

                                <div className="col-lg-7 ml-3">
                                    <div className="product-title">{this.state.detailCategory.product_name}</div>
                                    
                                    <hr/>
                                        <div className="product-price">Rp. {this.state.detailCategory.price}</div>
                                        <div className="product-stock">Jumlah yang ingin di beli : <button type="button" class="btn btn-light" onClick={this.kurang}>-</button> {this.state.quantity} <button type="button" class="btn btn-light" onClick={this.tambah}>+</button></div>
                                        <div className="product-stock">Jumlah stock : {this.state.detailCategory.quantity} </div>
                                        <hr/>
                                            <div className="btn-group cart">
                                                <button onClick={this.addCart} type="button" className="btn btn-success">
                                                    Add to cart
						</button>
                                            </div>
                                            
				</div>
			</div>
                                </div>
                                </div>
                                <div className="container">
                                    <div className="col-md-12 product-info">
                                        <ul id="myTab" className="nav nav-tabs nav_tabs">

                                            <li className="active"><a href="#service-one" data-toggle="tab">DESCRIPTION</a></li>
                                            <li><a href="#service-two" data-toggle="tab">PRODUCT INFO</a></li>
                                            <li><a href="#service-three" data-toggle="tab">REVIEWS</a></li>

                                        </ul>
                                        <div id="myTabContent" className="tab-content">
                                            
                                            <div>
                                                <h5>{this.state.detailCategory.deskrip}</h5>
                                            </div>
                                        </div>
                                        <hr/>
			</div>
                                    </div>
                                
                            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    id: state.user.id,
});

export default connect(mapStateToProps) (DetailCategoryGreenbean);