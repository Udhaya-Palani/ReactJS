import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './heart.css';
import heart from './heart.gif';
export function Heart(){
    return(
        <>
        <div className="container-fluid rose">
            <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 text-center text-black bg-white">
             <img src={heart} className="col-lg-6"/>
             <h3>Thank You!</h3>
             <h5>We will use your feedback to improve our customer support performance</h5>
            </div>
            <div className="col-lg-2"></div>
            </div>
        </div>
        </>
    );
}