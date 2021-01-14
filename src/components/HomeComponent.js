import React, { Component } from 'react';

import NavigationBar from './NavigationBar';
import Carousal from './Carousal';
import SideBar from './ad/SideBar';

export default class HomeComponent extends Component {
    render() {
        return(
            <div>
                <NavigationBar/>
                
                <Carousal/>
                <div className="row">
                    
                    <div className="col-3 pl-5">
                        <SideBar/>
                    </div>

                    <div className="col-9 pr-5">
                        gggg
                    </div>
                </div>

            </div>
        );
    }
}