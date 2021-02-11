import React, {Component} from 'react';

import AdViewer from './AdViewer';
import AddAd from './AddAd';
import Ad from './Ad';

export default class AdHome extends Component {
    render() {
        return(
            <div>
                <AdViewer/>
                {/* <AddAd/> */}
                {/* <Ad/> */}
            </div>
        );
    }
}
