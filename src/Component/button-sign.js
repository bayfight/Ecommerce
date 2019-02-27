import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ButtonMasuk from './button-masuk';

class ButtonSign extends PureComponent {
    render() {
        return (
            <div className="col-lg-2 col-md-2 col-sm-2">
                {this.props.isLoaded && this.props.id ?
                    (<ButtonMasuk />) :
                    (<Link to={`/login`} className="btn btn-warning dropdown-toggle" type="button" >
                        Sign In | Sign Up
                        </Link>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoaded: state.user.isLoaded,
    nama_depan: state.user.nama_depan,
    id: state.user.id,
});

export default connect(mapStateToProps)(ButtonSign);
