import React, { useState, useEffect } from 'react';
import './style.css';
import FeaturedTitle from "../components/HomeComponents/FeaturedTitle";
import TodayDetailComponent from "../components/HomeComponents/TodayDetailComponent/TodayDetailComponent.jsx";
import DealsCarousel from "../components/HomeComponents/DealsCarousel/DealsCarousel.jsx";
import BrandsCarousel from "../components/HomeComponents/BrandsCarousel/BrandsCarousel.jsx";
import RecommendCarousel from "../components/HomeComponents/RecommendCarousel/RecommendCarousel.jsx";
import DealsSliderComponent from "../components/HomeComponents/DealsSliderComponent/DealsSliderComponent.jsx";
import { Button, Card, Container, Row, Col, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import HeaderImg from '../assets/header.png';
// import Slider from "react-slick";
import { getBanner, getBrandsData, getSeasonData, getTodayDeal,getRecommendedData } from '../actions/Account';
import './Home.css';
import banner2 from  '.../../../public/images/banner2.jpg';
import banner3 from  '.../../../public/images/banner3.jpg';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
};





const banner1 = ["https://prabhat-port.s3.amazonaws.com/banners/PC-1500X600._CB648065009_.jpg?AWSAccessKeyId=AKIAZDRSRFSM5QHMITVV&Signature=cQIFReg78W31HA%2F4RknHwIQ2sxY%3D&Expires=1655539199", "https://prabhat-port.s3.amazonaws.com/banners/Unrec-footwear-3000._CB635337188_.jpg?AWSAccessKeyId=AKIAZDRSRFSM5QHMITVV&Signature=qO5AepWU%2BXfejNjSlpW1SmhrdJw%3D&Expires=1655539199", "https://prabhat-port.s3.amazonaws.com/banners/D47281209_WLA_Monsoon_Sale_DesktopTallHero_3000x1200_2._CB636244778_.jpg?AWSAccessKeyId=AKIAZDRSRFSM5QHMITVV&Signature=3ocGdYpxh1yNRV2KI6cNzr%2Byoe8%3D&Expires=1655539199"]

const carditem = [{}, {}, {}]

const item1 = [{}, {}, {}, {}]

const slideritem = [{}, {}, {}, {}, {}, {}, {}, {}]


export default function HomeComponent() {
    const [banner, setBanners] = useState([]);
    const [seasonData, setSeasonData] = useState([]);
    const [recommendedData, setrecommendedData] = useState([]);
    const [todayDeal, setTodayDeal] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getBanner().then((banner) => {
        
            setBanners(banner);
        });
        getSeasonData().then((card) => {
            setSeasonData(card);
        });
        getTodayDeal().then((data) => {
            setTodayDeal(data);
        });
        getBrandsData().then((data) => {
            setBrands(data);
        });
        getRecommendedData().then((data) => {
            setrecommendedData(data);
        });
    }, []);

      

    return (

        <>
        <div className="MainComponent">
        <Carousel fade>
                <Carousel.Item>
                    { banner.length>0 && (  
                         <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?t=st=1656064458~exp=1656065058~hmac=9cc95f251734e477226a1ac6959cd092dbf12d82efdea983880bebdccc328780&w=1380"
                        alt="First slide"
                        />)
                    }
                    <Carousel.Caption>
        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                { banner.length>0 && (  
                    <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-psd/summer-sale-70-discount_23-2148476960.jpg?t=st=1656064458~exp=1656065058~hmac=07559a6dbacaa55b706df15cadf8b011200d9c13258f7f95f0b4d0750fb30690&w=1380"
                    alt="Second slide"
                    />
                )}

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                { banner.length>0 && (  
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Third slide"
                    />
                )}

                    <Carousel.Caption>
        
                    </Carousel.Caption>
                </Carousel.Item>
       </Carousel>

        <div className="homeContainer">
      
           
           <div className="grid HeaderComponent">
            
             <TodayDetailComponent   data = {seasonData}/>
              {/* <DealsSliderComponent/> */}
           </div>



            <div style={{ paddingBottom: '50px'}}>
             </div>

         </div>

        <div className="SliderComponent">
            <h2 className="Heading">Today's Deals</h2>
             <DealsSliderComponent  data={todayDeal.results}/> 
           </div>
        <div className="SliderComponent">
          <h2 className="Heading">Recommended For You</h2>
             <RecommendCarousel data={recommendedData.results}/>
           </div>
        <div className="SliderComponent">
         <h2 className="Heading">Brands</h2>
             <BrandsCarousel data={brands.results}/>

           </div>
       

           
           <div className="homeContainer">
      
           
           <div className="grid HeaderComponent">
             <TodayDetailComponent   data = {seasonData}/>

           </div>



            <div style={{ paddingBottom: '50px'}}>
             </div>

         </div>
                     
        </div>
        </>
    )
}
