import React, { Component } from 'react';
import Logo from '../logo.svg';

import '../styles.css';

export default class NavigationBar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-purple">
                <div className="container-fluid">
                    <div className="navbar-brand p-0" href="#">
                        <img src={Logo} alt="logo" width="40" height="40"/>
                    </div>   

                    <button type="button" class="btn btn-primary btn-sm">Show Ads</button>

                </div>
            </nav>
        );
    }
}