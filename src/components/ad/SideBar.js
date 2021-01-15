import React, { Component } from 'react';

export default class SideBar extends Component {
    render() {
        return(
            <div>

                <div className="nav flex-column px-3 py-4">

                    <div className="dropdown text-left">
                        <label>Sort by</label>
                        <button className="btn btn-outline-primary btn-sm dropdown-toggle w-100" type="button" data-toggle="dropdown">
                                Sort By
                        <span className="caret"></span></button>
                        <ul className="dropdown-menu p-2">
                            <li className="w-100">Newest to Top</li>
                        </ul>
                    </div>

                    
                    <div className="input-group py-2">
                        <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                        <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                        <div class="input-group-append">
                            <span class="input-group-text">LKR</span>
                        </div>
                    </div>


                    
                </div>
            </div>
        );
    }
}