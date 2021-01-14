import React, { Component } from 'react';
import Logo from '../logo.svg';

// import { FaUserAlt } from 'react-icons/fa';

export default class NavigationBar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <div className="navbar-brand p-0" href="#">
                        <img src={Logo} alt="logo" width="40" height="40"/>
                    </div>   

                    <button type="button" class="btn btn-warning btn-sm">Show All Ads</button>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* Hello */}
                            </li>
                        </ul>
                    </div>

                    <button class="btn btn-success m-2">Login</button>
                    <button class="btn btn-outline-success">Register</button>

                </div>
            </nav>
        );
    }
}