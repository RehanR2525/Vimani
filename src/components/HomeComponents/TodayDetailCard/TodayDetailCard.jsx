import React from 'react'
import lasvegas from '.../../../public/images/las vegas.jpg';
import './TodayDetailsCards.css'
import {LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

const TodayDetailCard = ({data}) => {

  return (
    
    <>
         <div class="card">
            <div class="details">
                <h2 >{data.title}</h2>
                   <div className="imageGallery">
                   {
                      data.products?.map((item) => (
                        <NavLink to={"/product-details/" + item.scid} className='mt-1 mx-4' style = {{textDecoration:"none" ,cursor:"Pointer",fontColor:"black"}}>
                        <div className="imageBox">
                            <LazyLoadImage src={item.image} alt="image" className="CardImages" effect="blur"/>
                           <p className="itemDetials">{item.name} | {item.max_discount.discount__max}% - {item.min_discount.discount__avg}%  </p> 
                          </div>
                          </NavLink>
                          ))
                     }

                  </div>
            </div>   
        </div>
    </>

  )
}

export default TodayDetailCard