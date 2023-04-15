import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './about.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen,faGithub,faInstagram,faYoutube,faTwitter, faFacebook, faGoogle, faLinkedin, faContao, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleDown, faEnvelope, faLandmark, faLocation, faLocationArrow, faLocationDot, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { Portmenu } from "./portfoliomenu";
import { Link } from "react-router-dom";

export function About(){
    return(
        <>
       
        <div className="container-fluid bg-about" id="about">
            <div className="row">
                <div className="col-lg-12 row">
                    <div className="col-lg-5">
                        <div>
                        <h5 className="text-white pl-4 pt-5"><span className="bold">Hello there!</span> My name is <span className="bold design1">Udhaya kumar,</span> and I am a web developer with a passion for creating beautiful and functional websites.</h5>
                        </div>
                        <div>
                        <h5 className="text-white pl-4 pt-4">My approach to web development is centered around creating user-friendly, responsive websites that are accessible to all users. I believe that great design should not only look beautiful but also function flawlessly and enhance the user experience.</h5>
                        </div>
                        <div>
                        <h5 className="text-white pl-4 pt-4">When it comes to technical skills, I am proficient in HTML, CSS, JavaScript.. I also have experience working with frameworks such as  Bootstrap and React JS. I am continually learning and exploring new technologies to improve my skills and stay up-to-date with industry standards.</h5>
                        </div>
                        <div>
                        <h5 className="text-white pl-4 pt-4">Thank you for taking the time to read about me. If you have any questions or would like to discuss a potential project, please don't hesitate to contact me at through my social media profiles.</h5>
                        </div>
                        </div>
                    <div className="col-lg-6 p-5">
                        <div className="black p-3">
                            <h3 className=" text-center text-info">Contact</h3>
                            <h6 className="text-white">Mobile : +91 <span className="text-primary"> 8012113306</span></h6> 
                            <p className="text-white">Gmail :<span className="text-primary"> udhayaharris@gmail.com</span></p>
                        </div>
                        <div className="row justify-content-between text-center mt-5 black">
                        <Link className="btn ml-3" to="tel:91+8012113306">
                                <FontAwesomeIcon icon={faPhone} className="cont_btn p-3 p-lg-4 text-white"/>
                                </Link>
                                <Link className="btn ml-3" to="https://wa.me/8012113306">
                                <FontAwesomeIcon icon={faWhatsapp} className="cont_btn text-white bg-primary p-3 p-lg-4"/>
                            </Link>
                            <Link className="btn ml-3" to="mailto:udhayaharris@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} className="cont_btn text-white bg-primary p-3 p-lg-4"/>
                                </Link>
                                <Link className="btn ml-3" to="https://www.linkedin.com/in/udhaya-kumar-101648263/">
                            <FontAwesomeIcon icon={faLinkedin} className="cont_btn text-white bg-primary p-3 p-lg-4"/>
                            </Link>
                                <Link className="btn ml-3" to="https://github.com/Udhaya-Palani">
                                        <FontAwesomeIcon icon={faGithub} className="cont_btn text-white p-3 p-lg-4"/>
                            </Link>
                          
                             
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
        
        </>
    );
}