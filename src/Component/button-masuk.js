import React, { Component } from 'react';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert2-react';



class ButtonMasuk extends Component {
    constructor() {
        super()
        this.state = {
            show: false,
        }
    }
    logout = ()=>{
        localStorage.removeItem('user')
        this.setState({
            show: true
        })
        // this.props.history.push('/')
        // window.location.href='/'
    }
    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.nama_depan} {this.props.nama_belakang}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <i className="dropdown-item" >profil</i>
                    <i className="dropdown-item" onClick={this.logout} >log Out</i>
                    {
                                    this.state.show ?
                                        <SweetAlert
                                            show={this.state.show}
                                            title="alert"
                                            text="berhasil log Out"
                                            onConfirm={() => {

                                                this.setState({
                                                    show: false,
                                                    mesage: ""
                                                })
                                                
                                                window.location.href='/'
                                                

                                            }}
                                        /> : ''
                                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    nama_depan: state.user.nama_depan,
    nama_belakang : state.user.nama_belakang,
    id: state.user.id,
});
export default connect(mapStateToProps)(ButtonMasuk);