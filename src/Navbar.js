import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">
                        Pizzeria &nbsp;
                        <img src="images/PizzeriaLogo.png" alt="" width="40px" height="30px" className="d-inline-block align-text-top" />
                        </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/Order_Pizza'>Order Pizza</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Build_Ur_Pizza'>Build Pizza</Link>
                            </li>
                        </ul>
                    </div>
                    <button className="btn btn-warning">
                    <i class="fa fa-shopping-cart"></i> Shoping Cart
                    </button>
                </div>
                
            </nav>
        )
    }
}
