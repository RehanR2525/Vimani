import React from 'react'
import {LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BrandsCard = ({item}) => {



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
        <h6 style={{ fontSize: "1rem", padding: "5px 0" }}>{item.name}</h6>
        <h6>
            {item.max_price.sale_price__max}Rs - {item.min_price.sale_price__min}Rs
            </h6>
        </div>
    </>
  )
}

export default BrandsCard