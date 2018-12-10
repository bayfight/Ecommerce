import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
    <div class="container-fluid bg-dark text-white">
        <div class="container">
            <div class="row">
                <div class="col-lg-9"><i class="fas fa-shopping-cart fa-2x"></i></div>
                <div class="col-lg-3 pl">
                    <div class="dropdown">
                        <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sing In | Sing Up
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <p class="dropdown-item mt-4">Your Email</p>
                            <input class="email ml-4 mr-4" placeholder="Enter Your Email"/>
                            <p class="dropdown-item mt-4">Your Password</p>
                            <input class="Pasword ml-4 mr-4" placeholder="Enter Your Password"/>
                            <button class="btn btn-warning mt-2 ml-4">Masuk</button> <button class="btn btn-warning mt-2 ml-4"><a
                                    href="#">Sing
                                    Up</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <a class="navbar-brand pl-2" href="B:\Purwadhika\projectEcomerce\index.html"><img class="bpkIcon" src="images/BPK.jpeg"/>Bogor Punya Kopi</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                </nav>         
        </div>

        
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="row">
                <div class="col-lg-8 col-sm-12">
                    <div class="row">
                <div class="col-lg-1 col-sm-12">
                <div class="dropdown mt-2">
                    <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Coffee
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Green Bean</a>
                        <a class="dropdown-item" href="#">Roasted Bean</a>
                        <a class="dropdown-item" href="#">Ground Coffee</a>
                    </div>
                </div>
            </div>

            <div id="respon2" class="col-lg-1 col-sm-12">
                <div class="dropdown mt-2">
                    <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Brewer Manual
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">v60</a>
                        <a class="dropdown-item" href="#">Aero Press</a>
                        <a class="dropdown-item" href="#">Simphony</a>
                        <a class="dropdown-item" href="#">Grinder</a>
                    </div>
                </div>
            </div>

                <div id="respon3" class="col-lg-1 col-sm-12">
                <div class="dropdown mt-2">
                    <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Esspresso Macine
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Single</a>
                        <a class="dropdown-item" href="#">Double</a>
                    </div>
                </div>
            </div>

                <div id="respon4" class="col-lg-1 col-sm-12">
                <div class="dropdown pl-2 mt-2">
                    <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Roasted Macine
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Lokal</a>
                        <a class="dropdown-item" href="#">Internasional</a>
                    </div>
                </div>
            </div>

            </div>
        </div>

            <div class="col-lg-4 col-sm-12">
                <form id="respon5" class="form-inline mt-2">
                        <input class="form-control mr-sm-2" type="search" placeholder="Cari kopi atau mesin...."
                            aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </div>
                </div>
            </nav>
        </div>
    

    </div>
    );
  }
}

export default Navbar;