import React from 'react'
import { Button, Card, Container, Row, Col, Carousel,CardGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";


const SliderCard = ({item}) => {
  return (
   <>
        <div className="cardContainer">
            <img
                className="multi__image"
                src={item.image}
                alt=""
                style={{
                width: "100%",
                height: "50%",
                objectFit: "contain",
                marginBottom: "10px",
                }}
            />
            <NavLink to={"/product-details/" + item.name} className='mt-1 mx-4' style = {{textDecoration:"none" ,cursor:"Pointer",fontColor:"black"}}>
            <h6 className="ItemName">{item.name}</h6>
            </NavLink>

            <h6 className="ItemName2">
                {item.max_discount.discount__max}% - ${item.min_discount.discount__avg}% Off
                </h6>
            </div>
   </>
  )
}

export default SliderCard