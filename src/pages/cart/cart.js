import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';

class cart extends Component {
    constructor() {
        super()
        this.state = {
            kumpulData: {},
            Alamat : "",
            Atas_nama: "",
            Nomor_Telpon : "",
            Total : ""
        }
    }

    componentDidMount() {
        const url = `http://localhost:3020/getItemCart/${this.props.id}`
        Axios.get(url)
            .then((Ambil) => {
                this.setState({
                    kumpulData: Ambil.data,  
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
        let cekOutPesanan = () =>{
            let dataKirim = {
                idInvoice : 1,
                Alamat : this.state.Alamat,
                Name : this.state.Atas_nama,
                Phone : this.state.Nomor_Telpon,
                Total : this.state.kumpulData.total
            }
        let url = `http://localhost:3020/addToInvoice`
        Axios.post(url, dataKirim,)
        .then((result)=>{
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })

        }
    
        let change = (e) => {
            this.setState({
                Alamat: e.target.value,
            })
        }
    
        let change2 = (e) => {
            this.setState({
                Atas_nama: e.target.value,
            })
        }
    
        let change3 = (e) => {
            this.setState({
                Nomor_Telpon: e.target.value,
            })
        }

        const { kumpulData } = this.state;
        let list = kumpulData && kumpulData.data && kumpulData.data.length > 0 && kumpulData.data.map((val, i) => {
            return (
                <tr key={i}>
                    <th scope="row">{i+1}</th>
                    <td>{val.product_name}</td>
                    <td>{val.quantity}</td>
                    <td>{val.nama_gambar}</td>
                    <td>{val.total}</td>
                    <td><button type="submit" className="fas fa-trash" onClick={this.delete}></button></td>
                </tr>
            )
        })



        return (
            <React.Fragment>
                <div className="container-fluid bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item pt-1"><p>Verivikasi Pesanan</p></li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="container">
                                <div className="form-group">
                                    <label >Masukan Alamat Tujuan</label>
                                    <textarea type="text" className="form-control" id="exampleFormControlInput1" placeholder="Masukan Alamat" onChange={change} />
                                    <label>Atas Nama</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Masukan Nama" onChange={change2} />
                                    <label>Nomer Telpon</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Masukan Nomer Telpon" onChange={change3} />
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
                                        </table>
                                        
                                        <h1>Jumlah Harga : {this.state.kumpulData.total}</h1>
                                        
                                        <Link to="/cart/invoice">
                                        <button type="submit" className="btn btn-warning">Cek out Pesanan</button>
                                        </Link>


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

const mapStateToProps = (state) => ({
    nama_depan: state.user.nama_depan,
    nama_belakang : state.user.nama_belakang,
    id: state.user.id,
});

export default connect(mapStateToProps) (cart);