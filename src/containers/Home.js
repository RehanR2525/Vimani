import React, { useState, useEffect } from 'react';
import './style.css';

import { Button, Card, Container, Row, Col, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import HeaderImg from '../assets/header.png';

import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

const homeslider = [HeaderImg, HeaderImg, HeaderImg]

const carditem = [{}, {}, {}]

const item = [{}, {}, {}, {}]

const slideritem = [{}, {}, {},{},{},{},{},{}]


export default function HomeComponent() {


    return (
        <div style={{ paddingBottom: '50px' }}>
            <section>
                <Carousel>
                    {
                        homeslider.map((row) => (
                            <Carousel.Item>
                                <img src={row} style={{ width: '100%' }}></img>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </section>
            
            <section style={{marginTop:'-100px'}}>
                <Container>
                    <Row>
                        {
                            carditem.map(() => (
                                <Col lg={4} xs={12} className='my-3'>
                                    <Card className='p-3'>
                                        <div className='pl-4'>
                                            <h6 className='home-text1'>Super Summer Sale | Footwear</h6>
                                        </div>
                                        <Row>
                                            {
                                                item.map(()=>(
                                                    <Col lg={6}  xs={6} className='my-2'>
                                                    <div className='pl-2'>
                                                        <img src={HeaderImg} style={{height:'120px',width:'100%'}}></img>
                                                        <p className='my-1 home-text2' >Sneakers | 30-40% OFF</p>
                                                    </div>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                       
                                    </Card>
                                </Col>

                            ))
                        }
                    </Row>
                </Container>
            </section>
            
            <section>
                <Container>
                    <Row>
                        {
                            carditem.map(() => (
                                <Col lg={4} xs={12} className='my-3'>
                                    <Card className='p-3'>
                                        <div className='pl-4'>
                                            <h6 className='home-text1'>Shop By Categories | Summer</h6>
                                        </div>
                                        <Row>
                                            {
                                                item.map(()=>(
                                                    <Col lg={6}  xs={6} className='my-2'>
                                                    <div className='pl-2'>
                                                        <img src={HeaderImg} style={{height:'120px',width:'100%'}}></img>
                                                        <p className='my-1 home-text2' >Sneakers | 30-40% OFF</p>
                                                    </div>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                       
                                    </Card>
                                </Col>

                            ))
                        }
                    </Row>
                </Container>
            </section>
            
            <section className='mt-4'>
                <Container >
                    <div style={{background:'white'}} className='mx-1 pb-3'>
                        <div className='px-3 py-2' style={{display:'flex'}}>
                            <h6 className='home-text1'>Today’s Deals</h6>
                            <NavLink to='/' className='mt-1 mx-4'>
                               <p className='home-btn1'>See All Details</p>
                            </NavLink>
                        </div>
                        <div className='mx-4'>
                            <Slider {...settings}>
                                {
                                    slideritem.map(()=>(
                                      <div className='px-3'>
                                        <img src={HeaderImg} style={{height:'200px',width:'100%'}}></img>
                                      </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='mt-5'>
                <Container >
                    <div style={{background:'white'}} className='mx-1 pb-3'>
                        <div className='px-3 py-2' style={{display:'flex'}}>
                            <h6 className='home-text1'>Recommended For You</h6>
                            <NavLink to='/' className='mt-1 mx-4'>
                               <p className='home-btn1'>EXPLORE MORE</p>
                            </NavLink>
                        </div>
                        <div className='mx-4'>
                            <Slider {...settings}>
                                {
                                    slideritem.map(()=>(
                                      <div className='px-3'>
                                        <img src={HeaderImg} style={{height:'200px',width:'100%'}}></img>
                                      </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='mt-5'>
                <Container >
                    <div style={{background:'white'}} className='mx-1 pb-3'>
                        <div className='px-3 py-2' style={{display:'flex'}}>
                            <h6 className='home-text1'>Brands</h6>
                            <NavLink to='/' className='mt-1 mx-4'>
                               <p className='home-btn1'>EXPLORE MORE</p>
                            </NavLink>
                        </div>
                        <div className='mx-4'>
                            <Slider {...settings}>
                                {
                                    slideritem.map(()=>(
                                      <div className='px-3'>
                                        <img src={HeaderImg} style={{height:'200px',width:'100%'}}></img>
                                      </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='my-4'>
                <Container>
                    <Row>
                        {
                            carditem.map(() => (
                                <Col lg={4} xs={12} className='my-3'>
                                    <Card className='p-3'>
                                        <div className='pl-4'>
                                            <h6 className='home-text1'>50-60% OFF on Fitness Essentials</h6>
                                        </div>
                                        <Row>
                                            {
                                                item.map(()=>(
                                                    <Col lg={6}  xs={6} className='my-2'>
                                                    <div className='pl-2'>
                                                        <img src={HeaderImg} style={{height:'120px',width:'100%'}}></img>
                                                        <p className='my-1 home-text2' >Sneakers | 30-40% OFF</p>
                                                    </div>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                       
                                    </Card>
                                </Col>

                            ))
                        }
                    </Row>
                </Container>
            </section>
        </div>
    )
}
