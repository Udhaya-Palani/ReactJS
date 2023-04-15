 import  React from "react";
 import  'bootstrap/dist/css/bootstrap.css';
 import  './portfolio.css';
 import {Link as Linkup} from "react-scroll";
 import { Link } from "react-router-dom";


export  function  Portmenu(){
    return(
        <>
         <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse nav-area port" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto">
                  <Linkup activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration ={500}><li class="nav-item nav-link">HOME</li></Linkup>
                  <Linkup activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration ={500}><li class="nav-item nav-link">ABOUT</li></Linkup>
                  <Linkup activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration ={500}><li class="nav-item nav-link">EDUCATION</li></Linkup>
                  <Linkup activeClass="active" to="skills" spy={true} smooth={true} offset={-60} duration ={500}><li class="nav-item nav-link">SKILLS</li></Linkup>
                  <Linkup activeClass="active" to="certification" spy={true} smooth={true} offset={-50} duration ={500}><li class="nav-item nav-link">CERTIFICATION</li></Linkup> 
                  <Link to="/project/hello"><li class="nav-item nav-link">MY WORK</li></Link>
                </ul>
            </div>
        </nav> 
  
        </>
  );
 }

