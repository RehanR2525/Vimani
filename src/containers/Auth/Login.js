import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col, Card, InputGroup, FormControl } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { userlogin, logout } from '../../actions/auth';
import { Redirect, Link } from 'react-router-dom';
import bgImg from '../../assets/auth.png';

function Login({ auth, userlogin, logout }) {

    const { isAuthenticated, user, token, authCategory } = auth;


    useEffect(() => {
        logout();
    }, [])



    const handleSubmit = () => {
        // console.log(values);
        // userlogin(values);
    }


    //   if(isAuthenticated){
    //     if (authCategory=='admin'){
    //       return <Redirect to='/admin-dashboard' />;
    //     }
    //     else if(authCategory=='writer'){
    //       return <Redirect to='/dashboard' />;
    //     }
    //   }

    return (
        <div className='auth-container'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='my-4' style={{ width: '100%' }}>
                            <div>
                                <h1 className="auth-heading text-uppercase">Login</h1>
                            </div>
                            <div className='py-4'>
                                <div>
                                    <Form.Label className='text3'>Email ID</Form.Label>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            // placeholder="Recipient's username"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
                                    </InputGroup>
                                </div>
                                <div>
                                    <Form.Label className='text3'>Password</Form.Label>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            // placeholder="Recipient's username"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
                                    </InputGroup>
                                </div>
                                <div style={{display:'flex',justifyContent:'space-between',width:'100%',marginTop:'30px'}}>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                      <Form.Check type="checkbox" label="Remember Me" />
                                    </Form.Group>
                                    <p className='text3'>Forget Password?</p>
                                </div>
                                <div style={{ marginTop: '50px' }}>
                                    <Button className='custom-btn1' style={{ float: 'right', width: '50%' }}
                                        onClick={() => handleSubmit()}>Login Now!</Button>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'100px'}}>
                            <p className='text-center'>Don’t have an account? 
                                <NavLink to={'/register'} style={{textDecoration:'none'}}>
                                <span className='text3'> Register</span>
                                </NavLink>
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}></Col>
                </Row>
            </Container>
           
        </div>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { userlogin, logout })(Login);
