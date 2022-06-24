import React from 'react'

const RecommendedCard = ({item}) => {
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
            {item.max_discount.discount__max}% - ${item.min_discount.discount__avg}% Off
            </h6>
        </div>
</>
  )
}

export default RecommendedCard