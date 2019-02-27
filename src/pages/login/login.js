import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    setUserLoading,
    setUser,
} from './../../redux/actions/user';
import './login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SweetAlert from 'sweetalert2-react';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            show: false,
            pesan: "",
            dataUser: [],
            pasword: "",
            statusCode: ""
        }
    }

    input = (e) => {
        let url = 'http://localhost:3020/login'
        let user = {
            email: this.state.email,
            pasword: this.state.pasword,
        }
        this.props.setUserLoading();
        axios.post(url, user)
            .then((ambil) => {
                if (ambil.data.code === 200) {
                    console.log(ambil.data)
                    localStorage.setItem('user', JSON.stringify(ambil.data.results[0]))
                    this.setState({
                        show: true,
                        pesan: ambil.data.status,
                        dataUser: ambil.data.results[0],
                        statusCode : ambil.data.code
                    })
                    this.props.setUser(ambil.data.results[0]);
                } else if (ambil.data.code === 204) {
                    this.setState({
                        show: true,
                        pesan: ambil.data.status,
                        statusCode : ambil.data.code
                    })
                    console.log(this.state.dataUser)
                } else if (ambil.data.code === 203) {
                    console.log(ambil.data)
                    this.setState({
                        show: true,
                        pesan: ambil.data.status,
                        statusCode : ambil.data.code
                    })
                }
                // console.log(ambil.data)
            })
            .catch(err => {
                console.log(err)
            })
        // e.preventDefault();
        // this.props.history.push('/')
    }

    change = (e) => {
        this.setState({
            email: e.target.value,
        })
    }

    change1 = (e) => {
        this.setState({
            pasword: e.target.value,
        })
    }


    render() {
        console.log('hahaha')
        console.log(this.state.dataUser)
        return (
            <React.Fragment>
                <div className="container-fluid bg-white">
                    <div className="container pt-2 pb-2">
                        <div className="card">
                            <div className="col-lg-12 text-center">
                                <h3>Login</h3>
                                <img id="imageBPKnew" alt="bpk" src="images/BPK.jpeg"></img>
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
                                                if (this.state.statusCode === 200){
                                                this.props.history.push("/")
                                                // window.location.href="/"
                                                }else{
                                                    // window.location.href="/login"
                                                    this.props.history.push("/login")
                                                }

                                            }}
                                        /> : ''
                                }
                                <form className="form paddingleft pb-4" onSubmit={(e) => { e.preventDefault() }}>
                                    <input type="text" id="email" name="email" className="form-control input-lg" onChange={this.change} placeholder="Your Email" />
                                    <input type="password" id="pasword" name="pasword" className="form-control input-lg" onChange={this.change1} placeholder="pasword" />
                                    <button type="submit" className="btn btn-lg btn-primary btn-block signup-btn" onClick={this.input}>
                                        {this.props.isLoading ? 'Is Loading' :'Login my account'}
                                    </button>
                                    <Link to={`/signUp`}><button className="btn btn-lg btn-primary btn-block signup-btn mt-1">Signup Now</button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment >
        )

    }
}

const mapStateToProps = (state) => ({
    isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    setUserLoading: () => dispatch(setUserLoading()),
    setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);