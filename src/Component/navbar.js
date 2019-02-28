import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonSign from './button-sign';
import Cart from './cart';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert2-react';


class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            show: false,
            isLogin: false
        }
    }

    klik = ()=>{
        this.setState({
            show: true
        })
    }


    render() {
        // let nama_user = JSON.parse(localStorage.getItem('user'))
        // console.log('nama_user', nama_user);
        return (
            <React.Fragment>
                
            <nav className="container-fluid bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-10">
                        {this.props.id ?
                            (<Cart />):
                            (<i className="fas fa-shopping-cart fa-2x text-white" onClick={this.klik} >
                            {
                                    this.state.show ?
                                        <SweetAlert
                                            show={this.state.show}
                                            title="alert"
                                            text="Login Dulu"
                                            onConfirm={() => {

                                                this.setState({
                                                    show: false,
                                                    mesage: ""
                                                })
                                            }}
                                        /> : ''
                                }
                            </i>)}

                        </div>
                        <ButtonSign />
                    </div>
                </div>



                <div className="container 1">
                    <div className="navbar col-lg-12 navbar-expand-lg navbar-light bg-white">
                        <a className="pl-2 text-dark" href="/" ><img alt="sssds" className="bpkIcon" src="images/BPK.jpeg" /></a><p className="text-dark pt-3">Bogor Punya Kopi</p>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>


                <div className="container">
                    <div className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="row">
                                <div className="col-lg-8 col-sm-12">
                                    <div className="row">
                                        <div className="col-lg-1 col-sm-12">
                                            <div className="dropdown mt-1">
                                                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    Coffe
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                                    <Link className="dropdown-item" to="/coffe">Roasted Bean</Link>
                                                    <Link className="dropdown-item" to='/coffeGreenbean'>Green Bean</Link>

                                                </div>
                                            </div>
                                        </div>

                                        <div id="respon2" className="col-lg-1 col-sm-12">
                                            <div className="dropdown mt-1 pl-1 ">
                                                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    Coffe Equipment
                    </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <Link className="dropdown-item" to="/grinder">Manual Brew</Link>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                {/* <div className="col-lg-4 col-sm-12">
                                    <form id="respon5" className="form-inline mt-1 pl-5">
                                        <input className="form-control mr-sm-2 " type="search" placeholder="Cari kopi atau mesin...."
                                            aria-label="Search" />
                                        <button className="btn btn-outline-success my-sm-0 " type="submit">Search</button>
                                    </form>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
                
            </React.Fragment>
        );
    }
    
}

const mapStateToProps = (state) => ({
    id: state.user.id,
});

export default connect(mapStateToProps)(Navbar);