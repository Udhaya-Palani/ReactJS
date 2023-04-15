import React from "react";
import './super.css';
import lion from './lion.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import rcb from './rcblogo.jpeg';
import { Portmenu } from "../portfolio/portfoliomenu";
export function Super(){
    return(
        <>
        <div className="row p-5">
           
            <div className="col-lg-3"></div>
                <div className=" col-lg-6">
                    <h1 className="text-center bg-primary">Super over league </h1>
                    <div className="text-center">
                        <img className="img1" src={lion}/>
                        <img className="img1" src={rcb}/>
                    </div>
                </div>
            <div className="col-lg-3"></div>




        </div>
        
        
        
        </>
    );
}