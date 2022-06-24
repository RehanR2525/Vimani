import React from 'react'

const BrandsCard = ({item}) => {



    console.log(item);
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
        <h6 style={{ fontSize: "1rem", padding: "5px 0" }}>{item.name}</h6>
        <h6>
            {item.max_price.sale_price__max}% - ${item.min_price.sale_price__min}% Off
            </h6>
        </div>
    </>
  )
}

export default BrandsCard