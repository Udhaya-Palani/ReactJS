import React from "react";
import './card.css';
import profile from './profile-img.png';
import 'bootstrap/dist/css/bootstrap.css';
import watch from './watch-img.png';
import { Portmenu } from "../portfolio/portfoliomenu";
export function Card(){
    return(
        <>
        <div className="container-fluid bg-img">
            <h2 className="text-center">congratulations</h2>
            <div className="row">
                <div className="col-lg-4"></div>
                    <div className="col-lg-4 text-center p-4 bg-info">
                        <img src={profile}className="col-lg-7"/>
                        <h3>Udhaya</h3>
                        <h5>We have the latest styles & trends of watches, smart watches, clocks and other accessories.</h5>
                        <img src={watch} className="col-lg-6"/>
                    </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
        </>
          );
}     