import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


class invoice extends Component {
    constructor() {
        super()
        this.state = {
            kumpulData: null
        }
    }


    componentDidMount() {
        // console.log('this.props', this.props.match.params.id)
        const url = `http://localhost:3020/getInvoice/${this.props.match.params.id}`
        Axios.get(url)
            .then((Ambil) => {
                this.setState({
                    kumpulData: Ambil.data
                })
            })

    }

    render() {
        // const { kumpulData } = this.state;
        let list = this.state.kumpulData && this.state.kumpulData.data && this.state.kumpulData.data.length > 0 && this.state.kumpulData.data.map((val, i) => {
            return (
                <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{val.product_name}</td>
                    <td>
                        {val.quantity}
                    </td>
                    <td>{val.nama_gambar}</td>
                    <td>{val.quantity * val.price}</td>
                    <td><button type="submit" className="fas fa-trash" onClick={this.delete}></button></td>
                </tr>
            )
        })
        // const { kumpulData } = this.state;

        console.log('ambil', this.state.kumpulData && this.state.kumpulData.result)
        return (
            <React.Fragment>
                <div className="container-fluid bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item pt-1"><p>Invoice No : {this.state.kumpulData && this.state.kumpulData.result && this.state.kumpulData.result.idInvoice}</p> </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="container">
                                <div className="form-group">
                                    <label>Alamat Tujuan</label>
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{this.state.kumpulData && this.state.kumpulData.result && this.state.kumpulData.result.Alamat}</p>
                                        </div>
                                    </div>
                                    <label >Atas Nama</label>
                                    <div className="card">
                                        <div className="card-body">
                                            <p>{this.state.kumpulData && this.state.kumpulData.result && this.state.kumpulData.result.Name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h1>Detail Pesanan</h1>

                                        <table className="table">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Nama Product</th>
                                                    <th scope="col">Jumlah Barang</th>
                                                    <th scope="col">Foto</th>
                                                    <th scope="col">Harga</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {list}
                                            </tbody>
                                            <tr >
                                                <th scope="row"></th>
                                                <td></td>
                                                <td>
                                                    
                                                </td>
                                                <td>Jumlah Harga</td>
                                                <td>{this.state.kumpulData && this.state.kumpulData.result && this.state.kumpulData.result.Total}</td>
                                                <td><button type="submit" className="fas fa-trash" onClick={this.delete}></button></td>
                                            </tr>
                                        </table>

                                        <Link to="/cart/HistoryTransaksi"><button type="submit" className="btn btn-warning">Transaksi Slesai</button></Link>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default invoice