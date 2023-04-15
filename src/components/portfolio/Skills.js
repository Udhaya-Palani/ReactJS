import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './skills.css';
import { Portmenu } from "./portfoliomenu";
import technical from './Digital Marketing.gif';
import soft from './Listening skills black glyph icon.jpeg';

export function Skill(){
    return(
        <>
         <div className="container-fluid" id="skills">
            <h1 className="text-center text-light display-4">Skills</h1>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-4 p-3">
                    <img src={technical} className="col-lg-12 animate"/>
                    <div><h2 className="text-center p-3">TECHNICAL SKILLS</h2></div>
                    <div><h4 className="text-center text-white">HTML</h4></div>
                    <div><h4 className="text-center text-white">CSS</h4></div>
                    <div><h4 className="text-center text-white">Java Script</h4></div>
                    <div><h4 className="text-center text-white">Frame work: React JS and Bootstrap</h4></div>
                    <div><h4 className="text-center text-white">Responsive Degign</h4></div>
                </div>
                <div className="col-lg-4 p-3">
                    <img src={soft} className="col-lg-12 animate"/>
                    <div><h2 className="text-center p-3">SOFT SKILLS</h2></div>
                    <div><h4 className="text-center  text-white">Creativity</h4></div>
                    <div><h4 className="text-center  text-white">Team work</h4></div>
                    <div><h4 className="text-center  text-white">Growth mindset</h4></div>
                    <div><h4 className="text-center  text-white">Problem-solving</h4></div>
                </div>
                <div className="col-lg-2"></div>
            </div>
         </div>
        </>

    );
}