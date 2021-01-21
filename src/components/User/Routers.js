import React, { Component } from 'react';
import {Router, Route, Switch, Link } from 'react-router-dom';
import Login from './Login';
import ValiationForm from './ValidationForm';


export default class Routers extends Component {
    render() {
        return (
            <div>
                     <Switch>
                        
                        <Route path="/login" component={Login}/>
                        <Route path="/register" Component={ValiationForm}/>
                    </Switch>
            </div>
           
        )
    }
}
