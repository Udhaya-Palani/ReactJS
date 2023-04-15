import React, { useState } from "react";
import './hooks.css';
import 'bootstrap/dist/css/bootstrap.css';

export function Hooks(){
    const [add,setAdd]=useState(0);
    function reset(){
        setAdd(add*0);
    }
    return(
        <>
        <div className="row pic p-5">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 bor">
                <h1 className="text-center">{add}</h1>
                <div><button onClick={()=>{setAdd(add+1)}} className="bg-success bon my-2">ADD</button><br/>
                    <button onClick={()=>{setAdd(add-1)}} className="bg-danger bon my-2">LESS</button><br/>
                    <button onClick={reset} className="bg-info bon my-2">RESET</button></div>
            </div>
            <div className="col-lg-4"></div>
        </div>
        </>
    );
}