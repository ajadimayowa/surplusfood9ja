import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalHeader, Button, ButtonGroup, InputGroup, FormGroup, FormLabel } from "react-bootstrap";
import { Formik } from "formik";

const OnBoardingModal = ({ on, off }) => {
    const [login,setLogin] = useState(true);
    const Login = () => {
        return (
            <Formik
                validateOnBlur={true}
                initialValues={userInfo}
                onSubmit={
                    (val) => handleLogin(val)
                }
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <form

                        className='form d-flex flex-column align-items-center justify-content-center rounded rounded-2 py-4'>

                        <FormGroup className='w-100  mt-3 d-flex gap-3 flex-column justify-content-center align-items-center'>

                            <InputGroup className='w-75  border border-primary rounded rounded-1 d-flex gap-3 px-3 justify-content-start align-items-center' style={{ minHeight: '3em' }}>
                                <i className="bi text-primary bi-person-fill"></i>
                                <input onChange={handleChange} name="username" type="email" placeholder='Email' className='bg-transparent py-2  outline-0 border border-0' style={{ fontFamily: 'Montserrat', width: '90%', outline: 'none', color: 'gray' }} />
                            </InputGroup>



                            <InputGroup className='w-75  border border-primary rounded rounded-1 d-flex gap-3 px-3 justify-content-start align-items-center' style={{ minHeight: '3em' }}>
                                <i className="bi bi-lock-fill text-primary"></i>
                                <input onChange={handleChange} name="password" type={'password'} placeholder='Password' className='bg-transparent py-2  border border-0' style={{ width: '90%', outline: 'none' }} />
                            </InputGroup>
                            <p className='d-flex text-primary justify-content-end w-75 m-0 p-0' style={{ fontFamily: 'Montserrat-SemiBold', fontSize: '0.8em' }}>Forgot your password?</p>




                            <Button
                                disabled={values.username == '' || values.password == ''}
                                onClick={() => handleSubmit()}
                                className='w-100 py-2  outline-0 rounded rounded-1 border border-0 px-0' style={{ outline: 'none', minWidth: '18em', maxWidth: '75%', minHeight: '3em', fontFamily: 'Montserrat' }}>
                                Login
                            </Button>

                            <p>{Object.keys(errors)}</p>
                        </FormGroup>
                        <InputGroup className='w-75 mt-2 gap-2 d-flex text-grey justify-content-center flex-row align-items-center ' style={{ fontFamily: 'Montserrat-SemiBold', fontSize:'0.7em' }}>
                            <p className='d-flex  justify-content-center m-0'>New user?</p>
                            <p className='d-flex  justify-content-center m-0 text-primary' style={{ cursor: 'pointer' }}
                                onClick={() => setLogin(false)}
                            >Sign up</p>
                        </InputGroup>

                    </form>
                )
                }
            </Formik>
        )
    }

    const SignUp = () => {
        return (
            <Formik
                validateOnBlur={true}
                initialValues={userInfo}
                onSubmit={
                    (val) => handleLogin(val)
                }
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <form

                        className='form d-flex flex-column align-items-center justify-content-center rounded rounded-2 py-4'>

                        <FormGroup className='w-100  mt-3 d-flex gap-3 flex-column justify-content-center align-items-center'>

                            <InputGroup className='w-75  border border-primary rounded rounded-1 d-flex gap-3 px-3 justify-content-start align-items-center' style={{ minHeight: '3em' }}>
                                <i className="bi text-primary bi-person-fill"></i>
                                <input onChange={handleChange} name="firstname" type="text" placeholder='Firstname' className='bg-transparent py-2  outline-0 border border-0' style={{ fontFamily: 'Montserrat', width: '90%', outline: 'none', color: 'gray' }} />
                            </InputGroup>

                            <InputGroup className='w-75  border border-primary rounded rounded-1 d-flex gap-3 px-3 justify-content-start align-items-center' style={{ minHeight: '3em' }}>
                                <i className="bi text-primary bi-person-fill"></i>
                                <input onChange={handleChange} name="lastname" type="text" placeholder='Lastname' className='bg-transparent py-2  outline-0 border border-0' style={{ fontFamily: 'Montserrat', width: '90%', outline: 'none', color: 'gray' }} />
                            </InputGroup>

                            <InputGroup className='w-75  border border-primary rounded rounded-1 d-flex gap-3 px-3 justify-content-start align-items-center' style={{ minHeight: '3em' }}>
                                <i className="bi text-primary bi-person-fill"></i>
                                <input onChange={handleChange} name="emailSup" type="email" placeholder='Email' className='bg-transparent py-2  outline-0 border border-0' style={{ fontFamily: 'Montserrat', width: '90%', outline: 'none', color: 'gray' }} />
                            </InputGroup>

                            <InputGroup className='w-75  border border-primary rounded rounded-1 d-flex gap-3 px-3 justify-content-start align-items-center' style={{ minHeight: '3em' }}>
                                <i className="bi text-primary bi-person-fill"></i>
                                <input onChange={handleChange} name="usernameSup" type="text" placeholder='Username' className='bg-transparent py-2  outline-0 border border-0' style={{ fontFamily: 'Montserrat', width: '90%', outline: 'none', color: 'gray' }} />
                            </InputGroup>

                            

                            <InputGroup className='w-75  border border-primary rounded rounded-1 d-flex gap-3 px-3 justify-content-start align-items-center' style={{ minHeight: '3em' }}>
                                <i className="bi text-primary bi-person-fill"></i>
                                <input onChange={handleChange} name="phoneSup" type='tel' placeholder="Phone number" className='bg-transparent py-2  outline-0 border border-0' style={{ fontFamily: 'Montserrat', width: '90%', outline: 'none', color: 'gray' }} />
                            </InputGroup>

                            <InputGroup className='w-75  border border-primary rounded rounded-1 d-flex gap-3 px-3 justify-content-start align-items-center' style={{ minHeight: '3em' }}>
                                <i className="bi text-primary bi-person-fill"></i>
                                <input onChange={handleChange} name="passwordSup" type="password" placeholder='Password' className='bg-transparent py-2  outline-0 border border-0' style={{ fontFamily: 'Montserrat', width: '90%', outline: 'none', color: 'gray' }} />
                            </InputGroup>



                            <InputGroup className='w-75  border border-primary rounded rounded-1 d-flex gap-3 px-3 justify-content-start align-items-center' style={{ minHeight: '3em' }}>
                                <i className="bi bi-lock-fill text-primary"></i>
                                <input onChange={handleChange} name="CpasswordSup" type={'password'} placeholder='Confirm Password' className='bg-transparent py-2  border border-0' style={{ width: '90%', outline: 'none' }} />
                            </InputGroup>

                            <Button
                                disabled={values.username == '' || values.password == ''}
                                onClick={() => handleSubmit()}
                                className='w-100 py-2  outline-0 rounded rounded-1 border border-0 px-0' style={{ outline: 'none', minWidth: '18em', maxWidth: '75%', minHeight: '3em', fontFamily: 'Montserrat' }}>
                                Sign up
                            </Button>

                            <p>{Object.keys(errors)}</p>
                        </FormGroup>
                        <InputGroup className='w-75 mt-2 gap-2 d-flex text-grey justify-content-center flex-row align-items-center ' style={{ fontFamily: 'Montserrat-SemiBold', fontSize:'0.7em' }}>
                            <p className='d-flex  justify-content-center m-0'>Existing user?</p>
                            <p className='d-flex  justify-content-center m-0 text-primary' style={{ cursor: 'pointer' }}
                                onClick={() => setLogin(true)}
                            >Login</p>
                        </InputGroup>

                    </form>
                )
                }
            </Formik>
        )
    }
    const userInfo = {
        username: '',
        password: ''
    }
    const handleLogin = (val) => {
        console.log(val)
        navigate('/dashboard');
    }
    const navigate = useNavigate();
    return (
        <Modal show={on} centered>
            <ModalHeader className="d-flex justify-content-start align-items-center" style={{ fontFamily: 'Montserrat-SemiBold' }}>
                <div className="w-75">{login?'Sign in via email':'Sign up to become a user'}</div>
                <div className="d-flex px-3 justify-content-end w-25" style={{ cursor: 'pointer' }}><i className="bi bi-x-circle" onClick={() => {
                    off()
                    setLogin(true);
                }}></i>
                </div>
            </ModalHeader>
            <ModalBody>
{
    login? <Login/> : <SignUp/>
}
            </ModalBody>
        </Modal>
    )

}
export default OnBoardingModal;