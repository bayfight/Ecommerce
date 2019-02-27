import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
import './cart.css';

class Cart extends Component {
    constructor() {
        super()
        this.state = {
            kumpulData: {},
            
        }
    }

    componentDidMount() {
        const url = `http://localhost:3020/getItemCart/${this.props.id}`
        Axios.get(url)
            .then((Ambil) => {
                this.setState({
                    kumpulData: Ambil.data
                })
            })
    }

    tambah = ()=>{

    }

    kurang = ()=>{
        
    }

    delete = ()=>{
        let url = `http://localhost:3020/delete-cart`
        Axios.delete(url)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        const { kumpulData } = this.state;
        let list = kumpulData && kumpulData.data && kumpulData.data.length > 0 && kumpulData.data.map((val, i) => {
            return (
                <tr key={i}>
                    <th id="tabel" scope="row">{i+1}</th>
                    <td id="tabel">{val.product_name}</td>
                    <td id="tabel">{val.quantity}</td>
                    <td id="tabel">{val.nama_gambar}</td>
                    <td id="tabel">{val.total}</td>
                    <td id="tabel"><button type="submit" className="fas fa-trash" onClick={this.delete}></button></td>
                </tr>
            )
        })

        return (
            <React.Fragment>
                <i className="fas fa-shopping-cart fa-2x text-white" data-toggle="modal" data-target="#myModal">

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">

                            {/* <!-- Modal content--> */}
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title text-dark">Keranjang anda</h4>
                                </div>
                                <div className="modal-body col-lg-12">
                                    <table className="table col-lg-12">
                                        <thead className="thead-dark">
                                            <tr>
                                            <th id="tabel">no</th>
                                                <th id="tabel">nama</th>
                                                <th id="tabel">quantity</th>
                                                <th id="tabel">gambar</th>
                                                <th id="tabel">harga</th>
                                                <th id="tabel"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {list}
                                        </tbody>
                                    </table>

                                </div>
                                <div className="modal-footer">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h5 className="text-dark">Jumlah Belanja</h5>
                                        </div>
                                        <div className="col-lg-6 pl-3">
                                            <h5 className="text-dark">Rp. {this.state.kumpulData.total}</h5>
                                        </div>
                                    </div>
                                    <Link to='/cart'><button type="submit" className="btn btn-warning">Cek out Pesanan</button></Link>
                                </div>


                            </div>
                        </div>

                    </div>
                </i>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    nama_depan: state.user.nama_depan,
    nama_belakang : state.user.nama_belakang,
    id: state.user.id,
});

export default connect(mapStateToProps) (Cart);