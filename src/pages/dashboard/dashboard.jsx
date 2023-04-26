import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SideBar from "./sideBar";
import TopBar from "./topBar";
import Style from './dashboard.module.css';
import homeRightPic from '../../assets/images/homePicRight.svg';
import pepper from '../../assets/images/pepper.svg';
import basket from '../../assets/images/basket-pepper.svg';
import { carouselDescriptions } from "../../assets/texts";
import { useNavigate } from "react-router-dom";
import ServiceDescription from "../../sections/servicesDescription";
import DefaultCarousel from "../components/carousel";
import { categoryList } from "../../assets/texts";
import CatCard from "../components/catCard";
import OnBoardingModal from "../components/modals/onboardingModal";
import logo from '../../assets/images/logo.svg'




export default function Dashboard() {
    const navigate = useNavigate();
    const carouselImages = [basket, pepper];
    const [carouselItem, setCarouselItem] = useState(0);
    const [onBoardModal,setOnBoardModal] = useState(false);
    const carousel = [{ image: carouselImages[carouselItem], title: carouselDescriptions[carouselItem].title, description: carouselDescriptions[carouselItem].descriptions }]



    const carouselNext = (val) => {
        if (carouselItem < carouselDescriptions.length - 1) {
            setCarouselItem((item) => item + 1)
            console.log({ counter: carouselItem, lenght: carouselDescriptions.length })
        } else {
            setCarouselItem(0);
        }

    }

    const carouselPrev = (val) => {
        if (carouselItem > 0) {
            setCarouselItem(carouselItem - 1)
        } else if (carouselItem == 0) {
            setCarouselItem(carouselDescriptions.length - 1);
        }
    }
    return (
        <Container fluid className={`${Style.container} d-flex flex-column min-vh-100 p-0 m-0`}>
            <OnBoardingModal on={onBoardModal} off={()=>setOnBoardModal(false)}/>
            {/* side bar */}

            <SideBar />
            {/* Dashboard */}
            <div className="p-0 m-0" >
                {/* top bar */}
                <TopBar handleOnBoard={()=>setOnBoardModal(true)} />
                <Row className={`${Style.row1} w-100 m-0 d-flex align-items-center justify-content-center`} style={{ minHeight: '80vh' }}>
                    <Col xs={6} className="">
                        <Row className='w-75 bg-white rounded px-2 d-flex align-items-center m-0 mt-5' style={{ minHeight: '10em', maxHeight: '10em' }}>
                            <Col xs={1} className='d-flex justify-content-center h-100 align-items-center'>
                                <i className="bi bi-chevron-left" value={'left'}
                                    onClick={carouselPrev}
                                    style={{ cursor: 'pointer', fontSize: '2em' }}
                                ></i>
                            </Col>
                            <Col xs={10} className='d-flex flex-column p-0 justify-content-center'>

                                {
                                    <div className='w-100 d-flex gap-2'>
                                        <Col xs={3} className='d-flex justify-content-center align-items-center'>
                                            <img alt=' ' src={carousel[0]?.image} height={'100em'} />
                                        </Col>
                                        <Col xs={9} className='d-flex flex-column justify-content-center p-0'>
                                            <p className='p-0 m-0 text-danger text-center' style={{ fontFamily: 'Montserrat-SemiBold', fontSize: '1em' }}>{carousel[0]?.title}</p>
                                            <p className='p-0 m-0' style={{ fontFamily: 'Montserrat-Regular' }}>{carousel[0]?.description}</p>
                                        </Col>
                                    </div>
                                }

                            </Col>
                            <Col xs={1} className='d-flex justify-content-center align-items-center'>
                                <i className="bi bi-chevron-right" value={'right'}
                                    onClick={carouselNext}
                                    style={{ cursor: 'pointer', fontSize: '2em' }}
                                ></i>
                            </Col>
                        </Row>
                        <h3 style={{ fontFamily: 'hanoble', fontSize: '3.5em', lineHeight: '1em' }} className="text-light text-start mt-3 w-100">We are the new face <br /> of grocery shopping.</h3>
                        <p className="text-secondary text-start w-75 p-0 m-0 mt-3" style={{ fontFamily: 'montserrat', lineHeight: '1.5em' }}>
                            Welcome to our online grocery store, your one-stop-shop for all your
                            grocery needs. We offer a wide variety of fresh produce, pantry
                            essentials, household items, and more, all available at your
                            fingertips from the comfort of your own home.
                        </p>
                        <div className="mt-4 d-flex  justify-content-start">
                            <Button onClick={() => setOnBoardModal(true)} className="px-3 text-primary" variant="light" style={{ fontFamily: 'Montserrat' }}>Explore</Button>
                        </div>
                    </Col>
                    <Col xs={4} className="text-light">
                        <img src={homeRightPic} height={50} alt="mother and child on phone" className="rounded mt-5 shadow-sm" style={{ minHeight: '30em', minWidth: 'em' }}>

                        </img>
                    </Col>
                </Row>
                <ServiceDescription />
                <Row className="m-0" style={{ minHeight: '5em', padding: '3%', fontFamily: 'Montserrat' }}>
                    <p>Explore Our Market Place of Healthy Products</p>
                    <h3 style={{ fontFamily: 'Montserrat-SemiBold' }}>Customized Shopping Experience</h3>
                </Row>
                <Row className="d-flex justify-content-center m-0 mb-2 gap-4 px-4" style={{ minHeight: '5em', fontFamily: 'Montserrat' }}>
                    {

                        categoryList.map((category, index) =>
                            <CatCard cat={category} position={index} itemLength={categoryList.length} />
                        )
                    }
                </Row>

                <Row className=" m-0 py-3 px-4" style={{ minHeight: '5em' }}>
                    <div className='w-100 d-flex gap-2' style={{ minHeight: '3em', maxHeight: '15em', padding: '5%', backgroundColor: '#EFFBF9' }}>
                        <Col xs={3} className='d-flex justify-content-center align-items-center'>
                            <img alt=' ' src={carousel[0]?.image} height={'200em'} />
                        </Col>
                        <Col xs={9} className='d-flex flex-column justify-content-center p-0'>
                            <p className='w-100 p-0 m-0 text-danger' style={{ fontFamily: 'Montserrat-SemiBold', fontSize: '1em' }}>{carousel[0]?.title}</p>
                            <h3 className='p-0 m-0' style={{ fontFamily: 'Montserrat-Bold' }}>Check Deal of the Day</h3>
                            <p className='p-0 m-0' style={{ fontFamily: 'Montserrat-Regular' }}>{carousel[0]?.description}</p>
                            <p className='p-0 m-0' style={{ fontFamily: 'Montserrat-Regular' }}>{carousel[0]?.description}</p>
                        </Col>
                    </div>
                </Row>
                <DefaultCarousel />
                <Row className="d-flex justify-content-center m-0" style={{ minHeight: '5em', padding: '3%', fontFamily: 'Montserrat' }}>
                    <p>Customer review</p>
                    <h3 className="w-50" style={{ fontFamily: 'Montserrat-SemiBold' }}>
                        See how Surplus food is
                        changing the narrative for food delivery
                    </h3>
                </Row>
                <Row className="d-flex justify-content-center m-0" style={{ minHeight: '5em', padding: '3%', fontFamily: 'Montserrat' }}>
                    
                </Row>
                <Row className="bg-light m-0 mt-3 py-3" style={{ minHeight: '20em', fontFamily:'Montserrat' }}>
                    <Col className=" py-4"><img src={logo}/></Col>
                    <Col className=" py-4 gap-3 d-flex flex-column justify-content-start">
                        <p className="m-0 p-0 text-start" style={{fontWeight:'700'}}>Company</p>
                        <p className="m-0 p-0 text-start">About Us</p>
                        <p className="m-0 p-0 text-start">Privacy Policy</p>
                        <p className="m-0 p-0 text-start">Terms & Condition</p>
                        <p className="m-0 p-0 text-start">Cookie Policy</p>
                        
                    </Col>
                    
                    <Col className=" py-4 gap-3 d-flex flex-column justify-content-start">
                        <p className="m-0 p-0 text-start" style={{fontWeight:'700'}}>Features</p>
                        <p className="m-0 p-0 text-start">About Us</p>
                        <p className="m-0 p-0 text-start">Privacy Policy</p>
                        <p className="m-0 p-0 text-start">Terms & Condition</p>
                        <p className="m-0 p-0 text-start">Cookie Policy</p>
                        
                    </Col>

                    <Col className=" py-4 gap-3 d-flex flex-column justify-content-start">
                        <p className="m-0 p-0 text-start" style={{fontWeight:'700'}}>Resources</p>
                        <p className="m-0 p-0 text-start">About Us</p>
                        <p className="m-0 p-0 text-start">Privacy Policy</p>
                        <p className="m-0 p-0 text-start">Terms & Condition</p>
                        <p className="m-0 p-0 text-start">Cookie Policy</p>
                        
                    </Col>

                    <Col className=" py-4 gap-3 d-flex flex-column justify-content-start">
                        <p className="m-0 p-0 text-start" style={{fontWeight:'700'}}>Reach Us</p>
                        <p className="m-0 p-0 text-start">About Us</p>
                        <p className="m-0 p-0 text-start">Privacy Policy</p>
                        <p className="m-0 p-0 text-start">Terms & Condition</p>
                        <p className="m-0 p-0 text-start">Cookie Policy</p>
                        
                    </Col>
                    
                </Row>
                <Row className="bg-primary text-light m-0 align-items-center justify-content-center" style={{ minHeight: '4em', fontFamily:'Montserrat'}}>
                @ 2023 Floath Solution Hub. All rights reserved
                </Row>

            </div>

        </Container>
    )
}