import React, { useState, useEffect } from 'react';
import './style.css';
import BreadCrumbComponent from './components/BreadCrumb';

import { Button, Card, Container, Row, Col, Form,Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { GetApprovedBlogs ,baseUrl} from '../../actions/user';
import HeaderImg from '../assets/product1.png';
import detailsImg1 from '../assets/details1.png';
import detailsImg2 from '../assets/details2.png';
import detailsImg3 from '../assets/details3.png';

import deleteImg from '../assets/delete.png';
import mapImg from '../assets/map.png';


import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Slider from "react-slick";
import Rating from '@mui/material/Rating';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
};


const carditem = [{}, {}, {}]

const slideritem = [{}, {}, {}, {}, {}, {}, {}, {}]

const counterStyle={
    border:'1px solid black',borderRadius:'100%',cursor:'pointer'
}

export default function HomeComponent() {


    return (
        <div style={{ paddingBottom: '50px' }}>
            <section style={{ marginTop: '50px' }}>
                <Container>
                    <Row>
                        <Col lg={8} xs={12}>
                            <div>
                                <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>My Shopping Cart : 3 Items</h3>
                            </div>
                            <div className='d-flex justify-content-between align-items-center my-3'>
                               <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}><img src={mapImg}></img> Delivering to 110001</h3>
                               <Button className='custom-btn1  my-2' 
                               style={{background:'white',border:'1px solid #113B6B',color:'#113B6B'}}>CHANGE</Button>
                            </div>
                            <section>
                                <Table responsive>
                                  <thead>
                                    <tr>
                                      <th>Product Details</th>
                                      <th>Qty.</th>
                                      <th>Price</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                      {
                                          carditem.map(()=>(
                                            <tr>
                                              <td className='d-flex'>
                                                  <div>
                                                    <img src={HeaderImg} style={{ height: '150px', width: '150px' }}></img>
                                                  </div>
                                                  <div className='align-self-stretch'>
                                                      <div className='p-2 d-flex flex-column' style={{height:'100%'}}>
                                                        <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>FLATHEADS Lightweight Casual Shoes for Men | Super Breathable Men’s Sneakers</h3>
                                                        <div className='mt-2  d-flex justify-content-between'>
                                                            <Button className='custom-btn1  my-2' style={{background:'transparent',color:'#113B6B'}}
                                                               ><FavoriteBorderIcon/> Add to Wishlist</Button>
                                                            <div className='align-self-center' style={{border:'1px solid rgba(0,0,0,0.3)',height:'25px'}}></div>
                                                            <Button className='custom-btn1  my-2' style={{background:'transparent',color:'#E33636'}}
                                                               ><img src={deleteImg}></img> Remove</Button>
                                                        </div>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td><strong><span className='px-1 pb-1 mx-1'  style={counterStyle}>+</span>
                                              1<span className='px-2 pb-1 mx-1' style={counterStyle}>-</span></strong></td>
                                              <td><strong>₹4,510.00</strong></td>
                                            </tr>      
                                          ))
                                      }
                                  </tbody>
                                </Table>
                            </section>
                            <div>
                            <Form.Control type="text"  placeholder="Special Instructions..." style={{background:'#DFDFDF'}}
                            as="textarea" rows={5}/>
                            </div>
                        </Col>
                        <Col lg={4} xs={12}>
                            <div className='p-4' style={{background:'white',width:'100%'}}>
                                <div>
                                    <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>Order Summary</h3>
                                </div>
                                <hr/>
                                <div className='py-4'>
                                    <div style={{border:'1px solid black'}}>
                                      <Form.Group controlId="formBasicEmail">
                                          <Form.Control type="text" placeholder="Enter Pincode" />
                                      </Form.Group>
                                    </div>
                                    <div>
                                        <Button className='custom-btn1  my-2' style={{width:'100%'}} >Apply</Button>
                                    </div>
                                    <p className='text3 text-end text-dark my-3'>View Applicable Coupons</p>
                                    <section className='p-3' style={{border:'1px dashed #000000'}}>
                                          <div style={{borderBottom: '1px dashed #000000'}}>
                                              <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>HOME50</h3>
                                              <p className='text2 text-dark'>Lectus egestas dapibus amet sed sed a malesuada curabitur. Facilisis tincidunt amet parturient molestie pharetra sit amet lectus ultricies.</p>
                                          </div>
                                          <div className='mt-3'>
                                              <h3 className='text3' style={{ color: 'black', fontWeight: '600' }}>SAVE120</h3>
                                              <p className='text2 text-dark'>Lectus egestas dapibus amet sed sed a malesuada curabitur. Facilisis tincidunt amet parturient molestie pharetra sit amet lectus ultricies.</p>
                                          </div>
                                    </section>
                                    <section className='my-4'>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text2'>Subtotal</p>
                                            <p className='text2'><strong>₹7,620.00</strong></p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text2'>Discount</p>
                                            <p className='text2'><strong>₹500.00</strong></p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text2'>Shipping</p>
                                            <p className='text2'><strong>₹50.00</strong></p>
                                        </div>
                                        <hr/>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                               <p className='text2 m-0'><strong>Total Price</strong></p>
                                               <p>(Inclusive of all taxes)</p>
                                            </div>
                                            <p className='text2'><strong>₹7,170.00</strong></p>
                                        </div>
                                    </section>
                                    <section>
                                        <div>
                                            <Button className='custom-btn1  my-2' style={{width:'100%'}}>SECURE CHECKOUT</Button>
                                            <Button className='custom-btn1  my-2' style={{width:'100%',background:'white',border:'1px solid #113B6B',color:'#113B6B'}}>CONTINUE SHOPPING</Button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section style={{ marginTop: '50px' }}>
                <Container>
                    <div style={{ background: 'white' }} className='mx-1'>
                        <div className='px-3 py-3' style={{ display: 'flex' }}>
                            <h6 className='home-text1'>Frequently Bought Together</h6>
                        </div>
                        <div className='mx-4'>
                            <Slider {...settings}>
                                {
                                    slideritem.map(() => (
                                        <div className='px-3'>
                                            <img src={HeaderImg} style={{ height: '200px', width: '100%' }}></img>
                                            <div>
                                                <p className='text-center text3 mb-2' style={{ color: 'black' }}>Monitors</p>
                                                <p className='text-center text3 mb-2' style={{ color: 'black', fontSize: '20px' }}>₹10,000 - ₹50,000</p>
                                                <p className='text-center text3 mb-2' style={{ color: 'black', fontSize: '12px' }}>Ends In 12:52:35</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}
