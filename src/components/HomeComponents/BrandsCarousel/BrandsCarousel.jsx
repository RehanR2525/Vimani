import React,{useState} from 'react'
import ReactCardSlider from 'react-card-slider-component';
// import ReactCardSlider from '../DealsSlider/DealsSlider.jsx';
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BrandsCarousel.css";
import BrandsCard from './BrandsCard.js';



const PreviousBtn = (props) => {

  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowLeft style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowRight style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};



const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  centerPadding: "170px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const BrandssCarousel = ({data}) => {

  return (
    <>
    <div style={{ margin: "30px" }} className="carousel">
          <Slider {...carouselProperties}>
            {data && data.map((item) => (
              <BrandsCard item={item} />
            ))}
          </Slider>
     </div>
     </>
  );
}

export default BrandssCarousel