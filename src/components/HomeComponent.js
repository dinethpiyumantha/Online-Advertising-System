import React, { Component } from 'react';

import NavigationBar from './NavigationBar';
import AdHome from './ad/AdHome';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Register from './User/Register';


export default class HomeComponent extends Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                
                <NavigationBar/>
                <Switch>
              <Route path="/register"><Register></Register></Route>  
                </Switch>
                <AdHome/>
                </BrowserRouter>
            </div>
        );
    }
}