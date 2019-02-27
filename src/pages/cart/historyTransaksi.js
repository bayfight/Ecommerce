import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class HistoryTransaksi extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item pt-1"><p>History Transaksi</p></li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="container">
                                <div class="card">
                                    <div class="card-body">
                                        <table class="table">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th scope="col">Nomor Invoice</th>
                                                    <th scope="col">Jumlah Barang</th>
                                                    <th scope="col">Total Harga</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <Link to="/"><button type="submit" className="btn btn-warning">Kembali Belanja</button></Link>


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
export default HistoryTransaksi