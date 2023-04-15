import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './social.css';
import { Portmenu } from "../portfolio/portfoliomenu";
import { Project } from "../portfolio/project";
export function Social(){
    return(
        <>
        <div className="container-fluid bg">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="p-5 col-lg-6">
                    <div className="text-center p-3">
                        <h1 className="text-light">Social Buttons</h1>
                    </div>
                    <div className="d-flex justify-content-around">
                        <button className="bg-warning log-button ">Like</button>
                        <button className="center-button">Command</button>
                        <button className="bg-primary log-button">Share</button>
                    </div>
                </div>
                <div className="col-lg-3"></div>
             </div>    
        </div>
        
        
        </>

    );
}