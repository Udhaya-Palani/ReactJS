import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './fruits.css';
import mango from './mango.gif';
import banana from './banana.gif';

export function Fruit(){
    const [add,setAdd]=useState(0);
    const [plus,setPlus]=useState(0);
    function reset(){
        setAdd(add*0);}
    function initial(){
        setPlus(plus*0);}

    return(
        <>
              <div className="container-fluid bg-warning">
                <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 bg-light text-center">
                    <h2 className="py-4">Udhaya ate {add} mangoes {plus} bananas</h2>
                    <div className="row  ">
                    <div className="col-lg-6 py-4">
                        <img src={mango} className="col-lg-12"/>
                        <button onClick={()=>{setAdd(add+1)}} className="bg-primary blue">Eat Mango</button>
                        <button onClick={reset} className="orange m-2">Reset</button>
                    </div>
                    <div className="col-lg-6 py-4">
                        <img src={banana} className="col-lg-12 size "/>
                        <button onClick={()=>{setPlus(plus+1)}} className="bg-primary blue">Eat Banana</button>
                        <button onClick={initial} className="orange m-2">Reset</button>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
                </div>
              </div>
        </>
    );
}