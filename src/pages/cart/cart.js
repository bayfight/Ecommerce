import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

class cart extends Component {
    constructor() {
        super()
        this.state = {
            kumpulData: {},
            Alamat: "",
            Atas_nama: "",
            Nomor_Telpon: "",
            Total: "",
            idCart: []
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

    // tambah = () => {
    //     const { kumpulData, quantity } = this.state;
    //     if (kumpulData.quantity > quantity) {
    //         this.setState({
    //             quantity: quantity + 1
    //         })
    //     } else {
    //         alert('Out of Stock');
    //     }

    // }



    // kurang = () => {

    // }

    // delete = () => {
    //     let url = `http://localhost:3020/delete-cart`
    //     Axios.delete(url)
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    cekOutPesanan = () => {
        
        const { kumpulData } = this.state;
        console.log('kumpulData', kumpulData)
        let arr = [];
        kumpulData && kumpulData.data.map(kump => {
            arr.push(kump.id)
        })
        console.log('arr', arr);
        let dataKirim = {
            id_user: this.props.id,
            Alamat: this.state.Alamat,
            Name: this.state.Atas_nama,
            Phone: this.state.Nomor_Telpon,
            Total: this.state.kumpulData.total,
            idCart: arr,
        }
        console.log("idcart",dataKirim.idCart)
        console.log(dataKirim.idCart)
        let url = `http://localhost:3020/addToInvoice`
        Axios.post(url, dataKirim, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((result) => {
                console.log(result)
                // if(result.data.invoice !== '') {
                    window.location.href = `/cart/invoice/${result.data.invoice}`
                // }
            })
            .catch((err) => {
                console.log(err)
            })
    }


     change = (e) => {
        this.setState({
            Alamat: e.target.value,
        })
    }

     change2 = (e) => {
        this.setState({
            Atas_nama: e.target.value,
        })
    }

     change3 = (e) => {
        this.setState({
            Nomor_Telpon: e.target.value,
        })
    }
    render() {

        

        const { kumpulData } = this.state;
        let list = kumpulData && kumpulData.data && kumpulData.data.length > 0 && kumpulData.data.map((val, i) => {
            return (
                <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{val.product_name}</td>
                    <td>
                        {/* <button type="button" class="btn btn-light" onClick={this.kurang}>-</button> */}
                        {val.quantity}
                        {/* <button type="button" class="btn btn-light" onClick={this.tambah}>+</button> */}
                    </td>
                    <td>{val.nama_gambar}</td>
                    <td>{val.total}</td>
                    {/* <td><button type="submit" className="fas fa-trash" onClick={this.delete}></button></td> */}
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
                                    <textarea type="text" className="form-control" id="exampleFormControlInput1" placeholder="Masukan Alamat" onChange={this.change} />
                                    <label>Atas Nama</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Masukan Nama" onChange={this.change2} />
                                    <label>Nomer Telpon</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Masukan Nomer Telpon" onChange={this.change3} />
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

                                        {/* <Link to="/cart/invoice"> */}
                                        <button type="submit" className="btn btn-warning" onClick={this.cekOutPesanan}>Cek out Pesanan</button>
                                        {/* </Link> */}


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
    id: state.user.id,
});

export default connect(mapStateToProps)(cart);