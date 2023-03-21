import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, FormControl, Col, Row, FormGroup, FormLabel, InputGroup, Button, Modal, ModalHeader, ModalBody } from "react-bootstrap";
import logo from '../../assets/images/logo.svg'
import Styles from './signup.module.css'

const SignUpPage = () => {
    const navigate = useNavigate()
    const [signUpSuccessModal, setSignUpSuccessModal] = useState(false);

    return (
        <Container fluid className={`${Styles.container} d-flex p-0 min-vh-100 p-5`}>
            <Row className='w-100 shadow-sm m-0 rounded rounded-4 p-3'>
                <Row className="w-100 m-0 py-3" style={{ minHeight: '5em' }}>
                    <Col xs={2} className="d-flex justify-content-start"
                        onClick={() => navigate('/')}
                        style={{ cursor: 'pointer' }}>
                        <img alt='logo' src={logo} height='30em' />
                    </Col>
                    <Col>
                    </Col>
                </Row>

                <Col className='d-flex justify-content-center  m-0 align-items-center'>
                    <div className='d-flex justify-content-center p-3 align-items-center' style={{ minHeight: '40em', maxWidth: '35em', minWidth: '35em' }}>
                        <form

                            className='form border border-primary rounded rounded-2 py-4' style={{ minHeight: '35em', maxWidth: '30em', minWidth: '30em' }}>
                            <FormLabel className='mt-4' style={{ fontFamily: 'Montserrat-Bold' }}>Create Account</FormLabel>
                            <FormGroup className='w-100 mt-3 d-flex gap-4 flex-column justify-content-center align-items-center'>
                                <InputGroup className='w-75 bg-danger bg-light border border-primary rounded d-flex gap-3 justify-content-start align-items-center px-3'>
                                    <i className="bi text-primary bi-person-fill"></i>
                                    <input type="text" placeholder='First name' className='w-75 bg-transparent py-2  outline-0 border border-0' style={{ outline: 'none', minWidth: '18em', fontFamily: 'Montserrat' }} />
                                </InputGroup>

                                <InputGroup className='w-75 bg-danger bg-light border border-primary rounded d-flex gap-3 justify-content-start align-items-center px-3'>
                                    <i className="bi bi bi-people-fill text-primary"></i>
                                    <input type="input" placeholder='Last Name' className='w-75 bg-transparent py-2  outline-0 border border-0' style={{ outline: 'none', minWidth: '18em', fontFamily: 'Montserrat' }} />
                                </InputGroup>

                                <InputGroup className='w-75 bg-danger bg-light border border-primary rounded d-flex gap-3 justify-content-start align-items-center px-3'>
                                    <i className="bi bi-envelope-fill text-primary"></i>
                                    <input type="email" placeholder='Email' className='w-75 bg-transparent py-2  outline-0 border border-0' style={{ outline: 'none', minWidth: '18em', fontFamily: 'Montserrat' }} />
                                </InputGroup>

                                <InputGroup className='w-75 bg-danger bg-light border border-primary rounded d-flex gap-3 justify-content-start align-items-center px-3'>
                                    <i className="bi bi-telephone-fill text-primary"></i>
                                    <input type="input" placeholder='Phone number' className='w-75 bg-transparent py-2  outline-0 border border-0' style={{ outline: 'none', minWidth: '18em', fontFamily: 'Montserrat' }} />
                                </InputGroup>

                                <InputGroup className='w-75 bg-danger bg-light border border-primary rounded d-flex gap-3 justify-content-start align-items-center px-3'>
                                    <i className="bi bi-lock-fill text-primary"></i>
                                    <input type={'password'} placeholder='Password' className='w-75 bg-transparent py-2  outline-0 border border-0' style={{ outline: 'none', minWidth: '18em', fontFamily: 'Montserrat' }} />
                                </InputGroup>

                                <InputGroup className='w-75 bg-danger bg-light border border-primary rounded d-flex gap-3 justify-content-start align-items-center px-3'>
                                    <i className="bi bi-lock-fill text-primary"></i>
                                    <input type={'password'} placeholder='Confirm password' className='w-75 bg-transparent py-2  outline-0 border border-0' style={{ outline: 'none', minWidth: '18em', fontFamily: 'Montserrat' }} />
                                </InputGroup>

                                <InputGroup className='w-75 bg-danger bg-light rounded d-flex gap-3 justify-content-start align-items-center'>
                                    <Button
                                        onClick={() => setSignUpSuccessModal(true)}
                                        className='w-100 py-2  outline-0 border border-0' style={{ outline: 'none', minWidth: '18em', fontFamily: 'Montserrat' }}>Sign Up</Button>
                                </InputGroup>

                            </FormGroup>
                            <InputGroup className='w-100 mt-4 gap-2 d-flex justify-content-center flex-row align-items-center '>
                                <p className='d-flex  justify-content-center m-0'>Existing user?</p>
                                <p className='d-flex  justify-content-center m-0 text-primary' style={{ cursor: 'pointer' }}
                                    onClick={() => navigate('/login')}
                                >Login</p>
                            </InputGroup>



                        </form>
                    </div>
                    <Modal show={signUpSuccessModal} centered>
                        <ModalHeader className='bg-primary text-light py-0' style={{ fontFamily: 'Montserrat-Bold' }}>
                            <Col xs={10}>Sign up</Col>
                            <Col xs={2} className='d-flex px-3 justify-content-end py-3 h-100'
                                onClick={() => setSignUpSuccessModal(false)}
                                style={{ cursor: 'pointer' }}>X</Col>
                        </ModalHeader>
                        <ModalBody className='d-flex flex-column justify-content-center align-items-center'>
                            <i className="bi bi-check-circle-fill text-primary" style={{ fontSize: '5em' }}></i>
                            <p className='px-5 text-center m-0'
                                style={{ fontFamily: 'Montserrat' }}
                            > Thank you for joining us! you can now login to continue.</p>
                        </ModalBody>
                    </Modal>
                </Col>
                <Col xs={5} className='d-flex justify-content-center  m-0 align-items-center'>
                    <img alt="logo" />
                    <h4>Side Image goes here</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUpPage; 