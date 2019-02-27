import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class invoice extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item pt-1"><p>Invoice</p></li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="container">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Alamat Tujuan</label>
                                    <div class="card">
                                    <div class="card-body">
                                    <p>Alamat saya</p>
                                    </div>
                                    </div>
                                    <label for="exampleFormControlInput1">Atas Nama</label>
                                    <div class="card">
                                    <div class="card-body">
                                    <p>Bayu Yudo Utomo</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h1>Detail Pesanan</h1>

                                        <table class="table">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Nama Product</th>
                                                    <th scope="col">Jumlah Barang</th>
                                                    <th scope="col">Foto</th>
                                                    <th scope="col">Harga</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>Rp. 150000</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>Rp. 150000</td>
                                                </tr>
                                            </tbody>
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