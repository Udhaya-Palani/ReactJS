import React,{useState,useEffect} from "react";
import { Link } from "react-scroll";
export function Mobileapi(){
    const[Mobiles,setMobiles]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(json => setMobiles(json))

    })
    return(
        <>
        <div className="coninter-fluid">
            <div className="row">
                {Mobiles.map((value,index)=>(
                <>
                
                    <div class="card col-lg-3 m-5">
                      <img src={value.images} class="card-img-top" height="60%"  alt="..."/>
                      <div class="card-body border-10px solid blue">
                        
                        <h5 class="card-title text-center">{value.title}</h5>
                        <p class="card-text text-center">{value.description}</p>
                        <p class="card-text text-info text-center">{value.price}</p>
                        <p class="card-text text-info">{value.category}</p>
                        <Link to={`/productApi/${value.id}`}><button className="btn btn-dark">View More</button></Link>
                      </div>
                    </div>
                  </>   
                ))}

            </div>
        </div>
        </>
    );
}