import React,{useState} from 'react'
import ReactCardSlider from 'react-card-slider-component';
// import ReactCardSlider from '../DealsSlider/DealsSlider.jsx';

const DealsCarousel = ({data}) => {


  const sliderClick = (slider)=>{
    alert("hello world");
  }
  // setstate(data.map((item) => {
       
       
  // }));
  // data.map((item) =>{


  // })
  const slides = [
    {image:`${data && data[0].image}`,title:`${data && data[0].name}`,description:`${data && data[0].max_discount.discount__max}% - ${data && data[0].min_discount.discount__avg}% Off`,clickEvent:sliderClick},
    {image:`${data && data[1].image}`,title:`${data && data[1].name}`,description:`${data && data[1].max_discount.discount__max}% - ${data && data[1].min_discount.discount__avg}% Off`,clickEvent:sliderClick},
    {image:`${data && data[2].image}`,title:`${data && data[2].name}`,description:`${data && data[2].max_discount.discount__max}% - ${data && data[2].min_discount.discount__avg}% Off`,clickEvent:sliderClick},
    {image:`${data && data[3].image}`,title:`${data && data[3].name}`,description:`${data && data[3].max_discount.discount__max}% - ${data && data[3].min_discount.discount__avg}% Off`,clickEvent:sliderClick},
    {image:`${data && data[4].image}`,title:`${data && data[4].name}`,description:`${data && data[4].max_discount.discount__max}% - ${data && data[4].min_discount.discount__avg}% Off`,clickEvent:sliderClick},
    {image:`${data && data[5].image}`,title:`${data && data[5].name}`,description:`${data && data[5].max_discount.discount__max}% - ${data && data[5].min_discount.discount__avg}% Off`,clickEvent:sliderClick},
    {image:`${data && data[6].image}`,title:`${data && data[6].name}`,description:`${data && data[6].max_discount.discount__max}% - ${data && data[6].min_discount.discount__avg}% Off`,clickEvent:sliderClick},
    {image:`${data && data[7].image}`,title:`${data && data[7].name}`,description:`${data && data[7].max_discount.discount__max}% - ${data && data[7].min_discount.discount__avg}% Off`,clickEvent:sliderClick},
    {image:`${data && data[8].image}`,title:`${data && data[8].name}`,description:`${data && data[8].max_discount.discount__max}% - ${data && data[8].min_discount.discount__avg}% Off`,clickEvent:sliderClick},

    // {image:`${data && data[9].image}`,title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    // {image:`${data && data[0].image}`,title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    // {image:`${data && data[0].image}`,title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    // {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    // {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
  ]
  return (
    <div id="body">
      <ReactCardSlider slides={slides}/>
    </div>
  );
}

export default DealsCarousel