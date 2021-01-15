import React, {Component} from 'react';

import {AiOutlineSearch} from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';

import Img1 from '../images/toyota-premio-l.jpg';

export default class AdViewer extends Component {
    render() {
        return(
            <div bg-white>
                
                <div className="input-group mb-3 p-2 bg-white rounded-lg shadow-sm">
                    <input type="text" className="form-control" placeholder="Search Advertisement" aria-label="Search Advertisement" aria-describedby="button-addon2"/>
                    <button className="btn btn-primary" type="button" id="button-addon2"><AiOutlineSearch/> Search</button>
                </div>

                <p className="w-100 text-left text-dark">Results about ...</p>

                <div className="p-3">
                    <div className="card rounded-lg shadow-sm p-1 flex-row my-1">
                        <div className="flex-column">
                            <img src={Img1} className="rounded" width="300rem" alt=".."/>
                        </div>
                        
                        <div className="text-left">
                            <div className="card-body py-2">
                                <span className="badge mt-0 bg-warning text-white"><FaCrown/> Member</span>
                                <h5 className="m-0">Advertisement Title</h5>
                                <p className="text-left">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptates vel sequi fugiat illo velit veniam et eligendi.
                                </p>

                                <div className="flex-row">
                                    <h6 className="text-primary d-flex">Rs. 8,000,000</h6>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}