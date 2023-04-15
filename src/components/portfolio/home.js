import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';
import profile from './profile.png';
import { Portmenu } from "./portfoliomenu";

export function Home(){
    return(
        <>
        <Portmenu/>
      
        <div className="container-fluid bg-home" id="home">
            <div className="row">
                <div className="col-lg-6">
                    <div><h4 className="text-white p-5 font">Hi,iam</h4></div>
                    <div><h3 className="text-white text-center bold">UDHAYA KUMAR</h3></div>
                    <div><h5 className="text-white text-center pt-3">Front-End web developer</h5></div>
                    <div><h6 className="text-white text-center pt-5">I like to craft solid and scalable frondend products </h6></div>
                    <div><h6 className="text-white text-center">with great user experiences. </h6></div>
                </div>
                <div className="col-lg-6 cent p-lg-5">
                    <img src={profile} className="col-lg-6 mt-lg-5 circle animate"/>
                </div> 
            </div>
        </div>
        </>
    );
}