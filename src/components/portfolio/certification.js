import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './certification.css';
import intro from './introduction.jpg';
import mern from './mern.jpg';
import depth from './html and css depth.jpg';
import css from './css.jpg';
import tech from './Tech.jpg';
import script from './java script_page-0001.jpg';

export function Certification(){
    return(
        <>
        <div className="container-fluid p-lg-5">
        <div class="row justify-content-between" id="certification">
            <div class="col-lg-4">
                <img src={intro} class="col-lg-12 pt-5 animate" alt="..."/>  
                <h5 class="text-center p-3">Frond-end development</h5>
                <h3 class="text-center">Certified from META.</h3>
            </div>
            <div class="col-lg-4">
                <img src={mern} class="col-lg-12 pt-5 animate" alt="..."/>     
                <h5 class="card-title text-center p-3">HTML(MERN)</h5>
                <h3 class="card-text text-center">Certified from KGiSL Microcollge.</h3>
            </div>
            <div class="col-lg-4">
                <img src={depth} class="col-lg-12 pt-5 animate" alt="..."/>
                <h5 class="card-title text-center p-3">HTML and CSS depth</h5>
                <h3 class="card-text text-center">Certified from META.</h3>
            </div>
        </div>
        <div class="row justify-content-between" id="certification">
            <div class="col-lg-4">
                <img src={css} class="col-lg-12 pt-5 animate" alt="..."/>  
                <h5 class="card-title text-center p-3">CSS- web development</h5>
                <h3 class="card-text text-center">Certified from KGiSL Microcollge.</h3>
            </div>
            <div class="col-lg-4">
                <img src={script} class="col-lg-12 pt-5 animate" alt="..."/>     
                <h5 class="card-title p-3 text-center">java script</h5>
                <h3 class="card-text text-center">Certified from META.</h3>
            </div>
            <div class="col-lg-4">
                <img src={tech} class="col-lg-12 pt-5 animate" alt="..."/>
                <h5 class="card-title p-3 text-center">Tech Foundation</h5>
                <h3 class="card-text text-center">Certified from KGiSL Microcollge.</h3>
            </div>
        </div>
        </div>
        </>
    );
}