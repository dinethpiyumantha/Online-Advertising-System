import React, {Component} from 'react';

import Carousal from '../Carousal';
import SideBar from './SideBar';
import AdViewer from './AdViewer';

export default class AdHome extends Component {
    render() {
        return(
            <div>
                <Carousal/>
                <div className="row m-0 p-0">
                    
                    <div className="col-3 pl-5 mx-0">
                        <SideBar/>
                    </div>

                    <div className="col-9 px-5 py-4 mx-0 bg-light">
                        <AdViewer/>
                    </div>
                </div>
            </div>
        );
    }
}