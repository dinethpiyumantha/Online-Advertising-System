import React, {Component} from 'react';

import Carousal from '../Carousal';

import {AiOutlineSearch} from 'react-icons/ai';
import { FaCrown,FaCertificate } from 'react-icons/fa';
import { FaMobile,FaHome } from 'react-icons/fa';
import { ImUserTie } from 'react-icons/im';

import Img1 from '../images/toyota-premio-l.jpg';

// Main Comp
export default class AdViewer extends Component {
    render() {
        return(
            <div>
                <Carousal/>
                <div className="bg-dark">
                &nbsp;
                </div>
                <div className="row m-0 p-0">
                    
                    <div className="col-3 pl-5 mx-0">
                        <SideBar/>
                    </div>

                    <div className="col-9 px-5 py-4 mx-0 bg-light">
                        <AdResultView/>
                    </div>
                </div>
            </div>
        );
    }
}


// Side Bar Comp
export class SideBar extends Component {
    render() {
        return(
            <div>

                <div className="nav flex-column px-3 py-4 text-left">

                    <div className="dropdown text-left mb-3">
                        <h6>Sort by</h6>
                        <button className="btn btn-outline-primary btn-sm dropdown-toggle w-100 text-left" type="button" data-toggle="dropdown">
                                Sort By
                        <span className="caret"></span></button>
                        <ul className="dropdown-menu p-2">
                            <li className="w-100">Newest to Top</li>
                        </ul>
                    </div>

                    

                    <form className="border-top border-bottom py-3">
                    <h6>Filter by</h6>
                    <label>Price Range</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Min" aria-label="Dollar amount (with dot and two decimal places)"/>
                        <input type="text" className="form-control" placeholder="Max" aria-label="Dollar amount (with dot and two decimal places)"/>
                        <div className="input-group-append">
                            <span className="input-group-text">LKR</span>
                        </div>
                    </div>


                    <div className="input-group py-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>
                    </div>


                    <div className="input-group">
                        <input type="submit" className="btn btn-primary" value="Find"/>
                    </div>

                    </form>
                    
                    <br/>
                    <div className="list-group text-left">
                        <h6>All Categories</h6>
                        <div className="btn-sm btn-white text-left"><FaMobile className="mb-1"/> <span className="pt-1">Electronics</span></div>
                        <div className="btn-sm btn-white text-left"><FaHome className="mb-1"/> <span className="pt-1">Property</span></div>
                        <div className="btn-sm btn-white text-left"><ImUserTie className="mb-1"/> <span className="pt-1">Jobs</span></div>
                    </div>
                </div>
            </div>
        );
    }
}


// Result Showing Comp
export class AdResultView extends Component {
    render() {
        return(
            <div bg-white>
                
                <div className="input-group mb-3 p-2 bg-white rounded-lg shadow-sm">
                    <input type="text" className="form-control" placeholder="Search Advertisement" aria-label="Search Advertisement" aria-describedby="button-addon2"/>
                    <button className="btn btn-primary" type="button" id="button-addon2"><AiOutlineSearch/> Search</button>
                </div>

                <p className="w-100 text-left text-dark">Results about ...</p>

{/* ------------ Ad Card ---------------------------- */}
                <div className="px-3 py-1">
                    <div className="card rounded-lg shadow-sm p-1 flex-row my-0 btn btn-white">
                        <div className="flex-column">
                            <img src={Img1} className="rounded" width="300rem" alt=".."/>
                        </div>
                        
                        <div className="text-left">
                            <div className="card-body py-2">
                                <span className="badge mt-0 bg-warning text-white"><FaCrown className="mb-1"/> Member</span>
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


                <div className="px-3 py-1">
                    <div className="card rounded-lg shadow-sm p-1 flex-row my-0 btn btn-white">
                        <div className="flex-column">
                            <img src={Img1} className="rounded" width="300rem" alt=".."/>
                        </div>
                        
                        <div className="text-left">
                            <div className="card-body py-2">
                                <span className="badge mt-0 bg-success text-white"><FaCertificate className="mb-1"/> Top Agent</span>
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

                <br/>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item "><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
                </nav>
            </div>
        );
    }
}