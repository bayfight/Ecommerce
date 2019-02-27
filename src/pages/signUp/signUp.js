import React, { Component } from 'react';
import './signUp.css';
// import { connect } from 'react-redux';
// import {
//     setUserLoading,
//     setUser,
// } from './../../redux/actions/user';
import axios from 'axios';
import SweetAlert from 'sweetalert2-react';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            nama_depan: "",
            nama_belakang: "",
            email: "",
            pasword: "",
            birthday: "",
            gender: "",
            show : false,
            dataUser : [],
            statusCode: ""
        }
    }
    input = (e) => {
        console.log('fungsi input')
        let url = 'http://localhost:3020/signUp'
        // this.props.setUserLoading();
        axios.post(url, {
            nama_depan: this.state.nama_depan,
            nama_belakang: this.state.nama_belakang,
            email: this.state.email,
            pasword: this.state.pasword,
            birthday: this.state.birthday,
            gender: this.state.gender
        })
            .then((ambil) => {
                console.log(ambil.data)
                if (ambil.data.code === "101") {
                    console.log('if')
                    // localStorage.setItem('user', [this.state.nama_depan])
                    this.setState({
                        show: true,
                        pesan: ambil.data.status,
                        dataUser: ambil.data.result[0],
                        statusCode: ambil.data.code
                    })
                    console.log(ambil.data.code)
                    // this.props.setUser(ambil.data.result[0]);
                }else if(ambil.data.code === "100"){
                    console.log('else if')
                    console.log(ambil.data.code)
                    this.setState({
                        show : true,
                        pesan: ambil.data.status,
                        statusCode: ambil.data.code
                    })
                    console.log(this.state.show)
                } else {
                    console.log('else')
                }
            })
            .catch(err => {
                console.log(err)
            })
        e.preventDefault();
        // this.props.history.push('/')
    }

    change = (e) => {
        this.setState({
            nama_depan: e.target.value,
        })
    }

    change1 = (e) => {
        this.setState({
            nama_belakang: e.target.value,
        })
    }

    change2 = (e) => {
        this.setState({
            email: e.target.value,
        })
    }

    change3 = (e) => {
        this.setState({
            pasword: e.target.value,
        })
    }

    change4 = (e) => {
        this.setState({
            birthday: e.target.value,
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid bg-white">
                    <div className="container pt-2 pb-2">
                        <div className="card">
                            <div className="row">
                                <h3 className="col-sm-offset-3 col-sm-6 pt-2 pl-5">Signup</h3>
                                {
                                    this.state.show ?
                                        <SweetAlert
                                            show={this.state.show}
                                            title="alert"
                                            text={this.state.pesan}
                                            onConfirm={() => {

                                                this.setState({
                                                    show: false,
                                                    mesage: ""
                                                })
                                                if(this.state.statusCode === "101") {
                                                    this.props.history.push("/login")
                                                } else {
                                                    this.props.history.push("/signUp")
                                                }
                                                

                                            }}
                                        /> : ''
                                }
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <form className="form pl-5 pb-2"  >
                                        <div className="row">
                                            <div className="col-xs-6 col-md-6">
                                                <input type="text" name="nama_depan" className="form-control input-lg" onChange={this.change} placeholder="First Name" />
                                            </div>
                                            <div className="col-xs-6 col-md-6">
                                                <input type="text" name="nama_belakang" className="form-control input-lg" onChange={this.change1} placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <input type="text" name="email" className="form-control input-lg" onChange={this.change2} placeholder="Your Email" />
                                        <input type="pasword" name="pasword" className="form-control input-lg" onChange={this.change3} placeholder="pasword" />
                                        <input type="date" name="birthday" className="form-control input-lg" onChange={this.change4} placeholder="Birthday" />



                                        <label>Gender : </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="gender" value="male" id="male"
                                                onChange={
                                                    (e) => {
                                                        this.setState({
                                                            gender: e.target.value
                                                        })
                                                    }
                                                } />Male
                                                                            </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="gender"
                                                onChange={
                                                    (e) => {
                                                        this.setState({
                                                            gender: e.target.value
                                                        })
                                                    }
                                                } value="Female" id="female" />Female
                    </label>
                                        <br />
                                        <span className="help-block">By clicking Create my account, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.</span>
                                        <button className="btn btn-lg btn-primary btn-block signup-btn" onClick={this.input}>Create my account
                                        {this.props.isLoading ? 'Is Loading' :'Login my account'}
                                        </button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment >
        )

    }
}
// const mapStateToProps = (state) => ({
//     isLoading: state.user.isLoading,
// });

// const mapDispatchToProps = (dispatch) => ({
//     setUserLoading: () => dispatch(setUserLoading()),
//     setUser: (user) => dispatch(setUser(user)),
// });
export default SignUp;
// connect(mapStateToProps, mapDispatchToProps)