import React from 'react'
import  "./TodayDetailComponent.css";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TodayDetailCard  from '../TodayDetailCard/TodayDetailCard.jsx'


const TodayDetailComponent = ({data}) => {

   
  return (
    <>  
    <div className="cardBody">
    <div class="cards">
      
       {
       data?.map((item) => (

           <TodayDetailCard data={item}/>

          ))
       }
       

    </div>
    </div>
    </>
  )
}

export default TodayDetailComponent