import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './education.css';
import { Portmenu } from "./portfoliomenu";

export function Education(){
    return(
        <>
        <div className="container-fluid" id="education">
            <div class="p-lg-5 p-3 row justify-content-between">
                <div className="card col-lg-3">
                    <div>
                        <h1 className="text-info py-1">Suguna College of Engineering</h1>
                        <h3 className="py-1">Department: Mechanical Engineering</h3>
                        <h4 className="py-1">GGPA percentage: 5.98</h4>
                        <h5 className="py-1">Passed-out: 2017</h5>
                    </div>
                </div>
                <div class="card col-lg-3">
                    <div>
                        <h1 className="text-info py-1">Laurel Higher Secendary school</h1>
                        <h3 className="py-1">Department: Cumputer Sceince</h3>
                        <h4 className="py-1">Percentage: 61%</h4>
                        <h5 className="p1-1">Passed-out: 2013</h5>
                    </div>
                </div>
                <div class="card col-lg-3">
                    <div>
                        <h1 className=" py-1 text-info">SRV Higher Secendary school</h1>
                        <h4 className=" py-1">Percentage: 64%</h4>
                        <h5 className="py-1">Passed-out: 2011</h5>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}