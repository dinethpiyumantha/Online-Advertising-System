import React, { Component } from 'react';
import Logo from '../logo.svg';


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
                </div>
            </nav>
        );
    }
}