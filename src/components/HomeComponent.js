import React, { Component } from 'react';

import NavigationBar from './NavigationBar';
import AdHome from './ad/AdHome';



export default class HomeComponent extends Component {
    render() {
        return(
            <div>
              
                
                <NavigationBar/>
                <AdHome/>
               
            </div>
        );
    }
}