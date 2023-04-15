import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './project.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"

export function Project(){
    return(
        <>




    <nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <Link class="text-dark" to="/"><li class="nav-link"><FontAwesomeIcon icon={faCircleArrowLeft}/></li></Link>
                <Link class="text-dark" to="/Project/Hello"><li class="nav-link">Hello</li></Link>
                <Link class="text-dark" to="/Project/Card"><li class="nav-link">Card</li></Link>
                <Link class="text-dark" to="/Project/Super"><li class="nav-link">Super</li></Link>
                <Link class="text-dark" to="/Project/Social"><li class="nav-link">Social</li></Link>
                <Link class="text-dark" to="/Project/Notification"><li class="nav-link">Notification</li></Link>
                <Link class="text-dark" to="/Project/Login"><li class="nav-link">Login</li></Link>
                <Link class="text-dark" to="/Project/Tech"><li class="nav-link">Technology</li></Link>
                <Link class="text-dark" to="/project/Hooks"><li class="nav-link">Hooks</li></Link>
                <Link class="text-dark" to="/Project/Fruit"><li class="nav-link">Fruits</li></Link>
                <Link class="text-dark" to="/Project/Feedback"><li class="nav-link">Feedback</li></Link>
                <Link class="text-dark" to="/Project/Climate"><li class="nav-link">Weather</li></Link>
            </ul>
        </div>
    </nav>
        </>

    );
}