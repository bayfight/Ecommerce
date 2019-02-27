import React, { Component } from 'react';


class Breadcrumb extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-lg-12 pt-2">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item pt-1"><p>Coffe</p></li>
                            <li className="breadcrumb-item active pt-1" aria-current="page">GreenBean</li>
                        </ol>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}
export default Breadcrumb