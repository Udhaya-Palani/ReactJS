import React from "react";
import './helloworld.css';
import { Portmenu } from "../portfolio/portfoliomenu";
export function Hello(){
    return(
        <>
       
        <div className="row">
            <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <h1 className="text-center p-5 text-primary bold">Hello World!</h1>
                </div>
            <div className="col-lg-3"></div>
        </div>
        </>
    )
}