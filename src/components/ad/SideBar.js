import React, { Component } from 'react';

export default class SideBar extends Component {
    render() {
        return(
            <div>

                <div className="nav flex-column px-3 py-4">

                    <div class="btn-group">
                        <button class="btn btn-outline-dark btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Small button
                        </button>
                        <ul class="dropdown-menu">
                            <li>Newest to Top</li>
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}