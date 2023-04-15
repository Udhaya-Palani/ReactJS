import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './technology.css';
import scientist from './data-scientist.jpg';
import developer from './developer.png';
import vr from './vr.jpg';
import engineer from './engineering.png';

export function Tech(){
    return(
        <>
          <div className="container-fluid bg-info">
            <h1 className="text-center p-3">Learn 4.0 Technologies</h1>
            <h6 className=" col-lg-12 text-center"> smart, autonomous systems that use computer-based algorithms to monitor and control physical things like machinery, robots, and vehicles.</h6>
             <div className="row ">
                <div className="col-lg-1"></div>
                <div className="col-lg-5 bg-white border1 m-2">
                <h3>Data Scientist</h3>
                    <p>A data scientist is an analytics professional who is responsible for collecting, analyzing and interpreting data to help drive decision-making in an organization.</p>
                    <img src={scientist} className="col-lg-4 float-right"/>
                </div>
                <div className="col-lg-5 bg-white border2 m-2">
                <h3>IT Developer</h3>
                    <p>A data scientist is an analytics professional who is responsible for collecting, analyzing and interpreting data to help drive decision-making in an organization.</p>
                    <img src={developer} className="col-lg-4 float-right"/>
                </div>
                <div className="col-lg-1"></div>
             </div>
             <div className="row ">
                <div className="col-lg-1"></div>
             <div className="col-lg-5 bg-white border3 m-2 ">
                <h3>VR Developer</h3>
                    <p>A data scientist is an analytics professional who is responsible for collecting, analyzing and interpreting data to help drive decision-making in an organization.</p>
                    <img src={vr} className="col-lg-4 float-right"/>
                </div>
                <div className="col-lg-5 bg-white border4 m-2">
                <h3>Engineer</h3>
                    <p>A data scientist is an analytics professional who is responsible for collecting, analyzing and interpreting data to help drive decision-making in an organization.</p>
                    <img src={engineer} className="col-lg-4 float-right"/>
             </div>
             <div className="col-lg-1"></div>
          </div>
          </div>
        </>
    );
}