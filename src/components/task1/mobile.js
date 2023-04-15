import React,{useState,useEffect} from "react";
import './cardjson.css';
export function Mobilejson(){
    const[Mobile,setMobile]=useState([]);
    useEffect(()=>{
        fetch("https://jade-beignet-e7941a.netlify.app/mobile.json")
        .then(add=>add.json())
        .then(hor=>setMobile(hor))

    })
    return(
        <>
        <div className="coninter-fluid">
            <div className="row">
                {Mobile.map((value,index)=>(
                <>
                
                    <div class="card col-lg-3 m-5">
                      <img src={value.img_name} class="card-img-top" height="60%"  alt="..."/>
                      <div class="card-body border-10px solid blue">
                        
                        <h5 class="card-title text-center">{value.brand}</h5>
                        <p class="card-text text-center">{value.description}</p>
                        <p class="card-text text-info text-center">{value.price}</p>
                        <button class="card-text text-info">{value.button}</button>
                      </div>
                    </div>
                  </>   
                ))}

            </div>
        </div>
        </>
    );
}


