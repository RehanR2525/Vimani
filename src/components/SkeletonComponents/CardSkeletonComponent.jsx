import React from 'react';
import './CardSkeletonComponent.css';
import Skeleton from "react-loading-skeleton";



const CardSkeletonComponent = () => {
  return (
  <>
     <div className="card-skeleton" >
        <div className="left-col">
          <Skeleton circle width={40} height={40} />
        </div>
        <div className="right-col">
          <Skeleton count={4} style={{ marginBottom: ".6rem" }} />
        </div>
      </div>
  </>
  )
}

export default CardSkeletonComponent