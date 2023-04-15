import React,{useEffect,useState} from 'react';
import'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar}from'@fortawesome/free-solid-svg-icons'
import'./product.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



export function Deta(){
    const[mart,setMart]=useState([])
    const{id}=useParams()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(boost=>boost.json())
        .then(arr=>setMart(arr))
})

    return(
        <>
                <div className="container-fluid justify-content-between">
                            <div className=" row mt-5  ">
                                  <div className='col-lg-2'></div>
                                  <div className='col-lg-4 '>
                                  <img src={mart.image} className="card-img-top col-lg-10"/>
                                  </div>
                                <div className=" col-lg-4">
                                    <h5 className="card-title ">{mart.title}</h5>
                                    <p className="card-text ">{mart.description}</p>
                                    {/* <p className="card-text font-weight-bolder text-warning"><FontAwesomeIcon icon={faStar}/>{mart.rating.rate}</p> */}
                                    <p className="card-text font-weight-bolder"> ${mart.price}</p> 
                                    <p className="card-text font-weight-bolder">{mart.category}</p> 
                                      <button className='bt_det bg-primary btn-info '>Add cart</button>
                                   </div> 

                                <div className='col-lg-2'></div>
                             
                            </div>
                </div>
   
           
        </>
    );
}