import React,{useState} from 'react'
import ReactCardSlider from 'react-card-slider-component';
// import ReactCardSlider from '../DealsSlider/DealsSlider.jsx';

const BrandssCarousel = ({data}) => {


  const sliderClick = (slider)=>{
    alert("hello world");
  }

   console.log(data);
  const slides = [
    {image:`${data && data[0].image}`,title:`${data && data[0].name}`,description:`${data && data[0].max_price.sale_price__max}% - ${data && data[0].min_price.sale_price__min}% Off`,clickEvent:sliderClick},
    {image:`${data && data[1].image}`,title:`${data && data[1].name}`,description:`${data && data[1].max_price.sale_price__max}% - ${data && data[1].min_price.sale_price__min}% Off`,clickEvent:sliderClick},
    {image:`${data && data[2].image}`,title:`${data && data[2].name}`,description:`${data && data[2].max_price.sale_price__max}% - ${data && data[2].min_price.sale_price__min}% Off`,clickEvent:sliderClick},
    {image:`${data && data[3].image}`,title:`${data && data[3].name}`,description:`${data && data[3].max_price.sale_price__max}% - ${data && data[3].min_price.sale_price__min}% Off`,clickEvent:sliderClick},
    {image:`${data && data[4].image}`,title:`${data && data[4].name}`,description:`${data && data[4].max_price.sale_price__max}% - ${data && data[4].min_price.sale_price__min}% Off`,clickEvent:sliderClick},
    {image:`${data && data[5].image}`,title:`${data && data[5].name}`,description:`${data && data[5].max_price.sale_price__max}% - ${data && data[5].min_price.sale_price__min}% Off`,clickEvent:sliderClick},
    {image:`${data && data[6].image}`,title:`${data && data[6].name}`,description:`${data && data[6].max_price.sale_price__max}% - ${data && data[6].min_price.sale_price__min}% Off`,clickEvent:sliderClick},
    {image:`${data && data[7].image}`,title:`${data && data[7].name}`,description:`${data && data[7].max_price.sale_price__max}% - ${data && data[7].min_price.sale_price__min}% Off`,clickEvent:sliderClick},
    {image:`${data && data[8].image}`,title:`${data && data[8].name}`,description:`${data && data[8].max_price.sale_price__max}% - ${data && data[8].min_price.sale_price__min}% Off`,clickEvent:sliderClick},

  ]
  return (
    <div id="body">
      <ReactCardSlider slides={slides}/>
    </div>
  );
}

export default BrandssCarousel