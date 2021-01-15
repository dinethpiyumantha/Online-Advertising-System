import React, { Component } from 'react';
import Logo from '../logo.svg';

import {Link} from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { FaUserSlash } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

export default class NavigationBar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-primary py-2">
                <div className="container-fluid">
                    <div className="navbar-brand p-0" href="#">
                        <img src={Logo} alt="logo" width="50" height="50"/>
                    </div>   

                    <button type="button" class="btn btn-warning btn-sm">Show All Ads</button>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        
                        <div className="dropdown">
                            <button className="btn text-white dropdown-toggle" type="button" data-toggle="dropdown">
                                <FaUserAlt/> Profile
                            <span className="caret"></span></button>
                            <ul className="dropdown-menu p-2">
                                <li className="btn btn-white w-100"><MdSettings/> Settings</li>
                                <li className="btn btn-white w-100"><FaUserSlash/> Sign out</li>
                            </ul>
                        </div>
                        </ul>   
                    </div>
                    <button class="btn btn-success m-2" data-toggle="modal" data-target="#loginPage">Login</button>
                    <button class="btn btn-outline-warning " data-toggle="modal" data-target="#RegisterPage">Register</button>
                </div>

                {/* Login and Register model poop css use */}

                <div className="modal fade" tabindex="-1" id="loginPage" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                                <form>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                </form>
                    </div>
                    <div class="modal-footer">
                        <p> Please Register first <button className="badge-info"><Link className="nav-link" to="/register">Register</Link> </button>  </p>
                    </div>
                    </div>
                </div>
                </div>

            </nav>
        );
    }
}