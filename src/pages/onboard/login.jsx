import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, FormControl, Col, Row, FormGroup, FormLabel, InputGroup, Button, Modal, ModalHeader, ModalBody } from "react-bootstrap";
import logo from '../../assets/images/logo.svg';
import Styles from './login.module.css';
import { Formik } from "formik";

const LoginPage = () => {
    const [signUpSuccessModal, setSignUpSuccessModal] = useState(false);
    const userInfo = {
        username: '',
        password: ''
    }
    // const valSchema = yup.object().shape({
    //     username: yup.string().typeError('Must be a string').required('Enter username'),
    //     password: yup.string().typeError('Enter password').required('Enter your password')

    // })

    const logUserIn = () => {

    }

    const navigate = useNavigate();

    const handleLogin = (val) => {
        console.log(val)
        navigate('/dashboard');
    }
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
                        <Formik
                            validateOnBlur={true}
                            initialValues={userInfo}
                            onSubmit={
                                (val) => handleLogin(val)
                            }
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                                <form

                                    className='form d-flex flex-column align-items-center justify-content-center border border-primary rounded rounded-2 py-4' style={{ minHeight: '35em', maxWidth: '30em', minWidth: '30em' }}>
                                    <FormLabel className='mt-4' style={{ fontFamily: 'Montserrat-Bold' }}>Login</FormLabel>
                                    <FormGroup className='w-100  mt-3 d-flex gap-4 flex-column justify-content-center align-items-center'>

                                        <InputGroup className='w-75 bg-danger bg-light border border-primary rounded d-flex gap-3 justify-content-start align-items-center px-3'>
                                            <i className="bi text-primary bi-person-fill"></i>
                                            <input onChange={handleChange} name="username" type="email" placeholder='Email' className='w-75 bg-transparent py-2  outline-0 border border-0' style={{ outline: 'none', minWidth: '18em', fontFamily: 'Montserrat' }} />
                                        </InputGroup>


                                        <InputGroup className='w-75 bg-danger bg-light border border-primary rounded d-flex gap-3 justify-content-start align-items-center px-3'>
                                            <i className="bi bi-lock-fill text-primary"></i>
                                            <input onChange={handleChange} name="password" type={'password'} placeholder='Password' className='w-75 bg-transparent py-2  outline-0 border border-0' style={{ outline: 'none', minWidth: '18em', fontFamily: 'Montserrat' }} />
                                        </InputGroup>



                                        <InputGroup className='w-75 bg-danger bg-light border border-primary rounded px-0 d-flex gap-3 justify-content-start align-items-center'>
                                            <Button
                                            disabled={values.username == '' || values.password == ''}
                                                onClick={() => handleSubmit()}
                                                className='w-100 py-2  outline-0 border border-0 px-0' style={{ outline: 'none', minWidth: '18em', fontFamily: 'Montserrat' }}>
                                                Login
                                            </Button>
                                        </InputGroup>
                                        <p>{Object.keys(errors)}</p>
                                    </FormGroup>
                                    <InputGroup className='w-75 mt-4 gap-2 d-flex justify-content-center flex-row align-items-center '>
                                        <p className='d-flex  justify-content-center m-0'>New user?</p>
                                        <p className='d-flex  justify-content-center m-0 text-primary' style={{ cursor: 'pointer' }}
                                            onClick={() => navigate('/sign-up')}
                                        >Sign up</p>
                                    </InputGroup>

                                </form>)
                            }
                        </Formik>
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
                    <img alt="" />
                    <h4>Side Image goes here</h4>

                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage;