import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import './notification.css';

export function Notification(){
    return(
        <>
        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 ">
                <h1 className="text-center">Notifications</h1>
                <div className="bg-primary p-4 d-flex mb-2">
                    
                    <p className="text-white text-center"><FontAwesomeIcon icon={faCircleCheck} className="mr-3 text-white" />Notification Message</p>
                </div>
                <div className="bg-success p-4 d-flex mb-2">
                    
                <p className="text-white"><FontAwesomeIcon icon={faCircleCheck} className="mr-3 text-white " />Success Message</p>
                </div>
                <div className="bg-warning p-4 d-flex mb-2">
                    
                <p className="text-white"><FontAwesomeIcon icon={faCircleCheck} className="mr-3 text-white"  />warning Message</p>
                </div>
                <div className="bg-danger p-4 d-flex mb-2 ">
                    
                <p className="text-white"><FontAwesomeIcon icon={faCircleExclamation}className="mr-3 text-white " />Alert Message</p>
                </div>
            </div>
            <div className="col-lg-4"></div>
        </div>
        
        
        
        </>
    );
}