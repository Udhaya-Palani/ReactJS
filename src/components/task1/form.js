import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './form.css';

import user from './user.image.png';

export function Login(){
    return(
      <>
      <div className="container-fluid background">
        <div className="row">
          <div className="col-lg-6">
                  <img src={user} className="col-sm-10"/>
          </div>
          <div className="col-lg-6 text-center">
            <h1 className="pt-5 text-white">Member Login</h1>
            <div>
            <input type="mail" id="mail" value="" placeholder="Email" className="login mt-5"/>
            </div>
            <div>
            <input type="password" id="pass" value="" placeholder="password" className="password mt-5"/>
            </div>
            <div>
              <button className="button1 mt-5">LOGIN</button>
            </div>
            <div>
              <h6 className="pt-5">Forget<span className="text-success"> Username / Password?</span></h6>
              <h6 className="text-success pl-4">Create Your Account-></h6>
            </div>
            
          </div>
        </div>
      </div>
      </>

    );

}