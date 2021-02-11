import React, { Component } from 'react';

import C1 from './images/1.jpg';

export default class Carousal extends Component {
    render() {
        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    {/* <li data-target="#carouselExampleIndicators" data-slide-to="1"></li> */}
                    
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={C1} className="d-block w-100" alt="..."/>
                        <div className="alert alert-light position-absolute" role="alert">
                        A simple light alert—check it out!
                        </div>
                    </div>
                    {/* <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                    </div> */}
                </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        );
    }
}