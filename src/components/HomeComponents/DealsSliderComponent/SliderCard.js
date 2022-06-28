import React from 'react'
import { Button, Card, Container, Row, Col, Carousel,CardGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const SliderCard = ({item}) => {
  return (
   <>
        <div className="cardContainer">
            <LazyLoadImage
                className="multi__image"
                src={item.image}
                alt=""
                effect="blur"
                style={{
                width: "100%",
                height: "150px",
                objectFit: "contain",
                marginBottom: "10px",
                }}
            />
            <NavLink to={"/product-details/" + item.name} className='mt-1 mx-4' style = {{textDecoration:"none" ,cursor:"Pointer",fontColor:"black"}}>
            <h6 className="ItemName">{item.name}</h6>
            </NavLink>

            <h6 className="ItemName2">
                {item.max_discount.discount__max}% - {item.min_discount.discount__avg}% Off
                </h6>
            </div>
   </>
  )
}

export default SliderCard