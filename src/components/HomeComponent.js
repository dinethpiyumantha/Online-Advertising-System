import React, { Component } from 'react';

import NavigationBar from './NavigationBar';
import AdHome from './ad/AdHome';
import {BrowserRouter,Route,Switch} from 'react-router-dom';



export default class HomeComponent extends Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                
                <NavigationBar/>
                <AdHome/>
                </BrowserRouter>
            </div>
        );
    }
}