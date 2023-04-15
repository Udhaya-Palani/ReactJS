import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './feedback.css';
import happy from './happy.png';
import none from './none.png';
import cry from './sad.png';
import { Link } from "react-router-dom";


export function Feedback(){
    return(

        <>
        <div className="container-fluid rose">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 mt-5 text-center bg-white">
                    <h2>How satisfied are you with our customer support performance?</h2>
                    <div>
                        <div className="row">
                           <div className="col-lg-4">
                            <Link to="/Heart"><img src={happy} className="col-lg-12"/></Link>
                            </div>
                           <div className="col-lg-4">
                            <Link to="/Heart"><img src={none} className="col-lg-12"/></Link>
                            </div>
                           <div className="col-lg-4">
                            <Link to="/Heart"><img src={cry} className="col-lg-12"/></Link>
                            </div>
                        </div>
                    </div>
                <div className="col-lg-3"></div>
            </div>

        </div>
        </div>
        </>
    );
}