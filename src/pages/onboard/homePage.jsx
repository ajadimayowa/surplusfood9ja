import React, { useState } from "react";
import { Button, Col, Container, Row, Card, Carousel } from "react-bootstrap";
import logo from '../../assets/images/logo.svg'
import sideImg from '../../assets/images/side-image.svg';
import groceryStore from '../../assets/images/grocery-store.svg';
import dollar from '../../assets/images/dollar.svg';
import delivery from '../../assets/images/delivery.svg';
import pepper from '../../assets/images/pepper.svg';
import basket from '../../assets/images/basket-pepper.svg';
import { heading } from "../../assets/texts";
import { subHead } from "../../assets/texts";
import { taglines } from "../../assets/texts";
import { carouselDescriptions } from "../../assets/texts";
import Styles from '../onboard/home.module.css';
import { ToastContainer, toast } from 'react-toastify';
import DefaultCarousel from "../components/carousel";
import { categoryList } from "../../assets/texts";
import { useNavigate } from "react-router-dom";







export default function Home() {
    const navigate = useNavigate();
    const [carouselItem, setCarouselItem] = useState(0);
    const tagIcons = [groceryStore, dollar, delivery];
    const carouselImages = [basket, pepper];
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
        <Container fluid className={`d-flex px-0 flex-column max-w-100 bg-white m-0 ${Styles.container}`}>
            <ToastContainer />
            <Row className='header d-flex mt-3 justify-content-end aligh-items-end bg-white m-0' style={{ maxHeight: '10em', minHeight: '6em' }}>
                <Col xs={2} className='d-flex p-0 m-0 justify-content-end align-items-center'>
                    <img src={logo} alt='logo' className='ml-5' height={'30px'} />
                </Col>
                <Col xs={10} className='d-flex m-0 gap-3 justify-content-end align-items-center px-5' style={{ fontFamily: 'Montserrat-SemiBold' }}>
                    <Button className='m-0 mr-5' onClick={() => navigate('/sign-up')}>Get started</Button>
                    <Button variant="secondary" onClick={() => navigate('/login')}>Login</Button>

                </Col>
            </Row>

            <Row className='d-flex m-0 gap-0 py-3'>
                <Col className='d-flex m-0 px-3 
                justify-content-center'>
                    <img src={sideImg} alt=' ' className='bg-white rounded 
                    rounded-5 d-flex
                    px-0 py-0
                    border-0
                    justify-content-center
                    align-items-center m-0 p-0 w-75 h-75'/>
                </Col>
                <Col xs={8} className='d-flex flex-column justify-content-start'>
                    <Row className='text-dark justify-content-center py-0 text-align-center center'>
                        <h3 className='text-center w-50 px-3'
                            style={{ fontFamily: 'Montserrat-Bold', fontSize: '2.5em' }}
                        >{heading}</h3>
                    </Row>
                    <Row className='text-dark justify-content-center text-align-center center'>
                        <p className='text-center w-75 px-3 py-2'
                            style={{ fontFamily: 'Montserrat-Regular', fontSize: '1em' }}
                        >{subHead}</p>
                    </Row>
                    <Row className=''>
                        <div className='d-flex justify-content-center align-items-center flex-row gap-2'>
                            {
                                taglines.map((tags, index) => (
                                    <div key={index} className='d-flex flex-column gap-2 p-2 justify-content-center align-items-center'>
                                        <Card className='shadow-sm border border-0 p-3 rounded rounded-4' style={{ minHeight: '10em', minWidth: '12em' }}>
                                            <Card.Body className='d-flex align-items-center justify-content-center'>
                                                <img alt=' ' src={tagIcons[index]} />
                                            </Card.Body>
                                        </Card>
                                        <h5 style={{ fontFamily: 'Montserrat-SemiBold', fontSize: '0.9em' }}>{tags.title}</h5>
                                        <p className='p-0 m-0 text-center'
                                            style={{ fontFamily: 'Montserrat-Regular', fontSize: '0.8em', textAlign: 'center' }}>{tags.info}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </Row>
                    <Row className='w-100 m-0' style={{ minHeight: '12em', maxHeight: '8em' }}>
                        <Col xs={1} className='d-flex justify-content-center align-items-center'>
                            <i className="bi bi-chevron-left" value={'left'}
                                onClick={carouselPrev}
                                style={{ cursor: 'pointer', fontSize: '2em' }}
                            ></i>
                        </Col>
                        <Col xs={10} className='d-flex flex-column p-0 justify-content-center'>

                            {
                                <div className='w-100 d-flex gap-2'>
                                    <Col xs={3} className='d-flex justify-content-center align-items-center'>
                                        <img alt=' ' src={carousel[0]?.image} />
                                    </Col>
                                    <Col xs={9} className='d-flex flex-column justify-content-center p-0'>
                                        <p className='p-0 m-0 text-danger' style={{ fontFamily: 'Montserrat-SemiBold', fontSize: '1.5em' }}>{carousel[0]?.title}</p>
                                        <p className='p-0 w-75' style={{ fontFamily: 'Montserrat-Regular' }}>{carousel[0]?.description}</p>
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
                </Col>

            </Row>
            <Row className='m-0 p-0' style={{ minHeight: '17em' }}>
                <DefaultCarousel />
            </Row>
            <Row className='m-0 p-3 mt-3 d-flex gap-2' style={{ minHeight: '18em' }}>
                <Row>
                    <h3 className='m-0 p-1 text-center '
                        style={{ fontFamily: 'Montserrat-SemiBold', }}>Our Currrent Services</h3>
                </Row>
                <Row className='m-0 p-0 px-4 d-flex gap-2'>
                    {
                        categoryList.map((category, index) => (
                            <Col className='d-flex shadow-sm text-center flex-column justify-content-center m-0 p-0' style={{ minHeight: '30em', cursor: 'pointer', fontFamily: 'Montserrat' }}>
                                <img src={category.catImage} alt='category image' className='p-3' style={{ maxHeight: '13em', cursor: 'pointer' }} />
                                <p className='p-0 m-0 mt-3 text-danger' style={{ fontWeight: '700' }} >{category.title}</p>
                                <p className='p-0 m-0 px-2 mt-3' >{category.description}</p>
                                <div className='mt-3'>
                                    <Button variant="link" className=' border border-0'>{index == categoryList.length - 1 ? 'Place order' : 'Shop now'}</Button>
                                </div>

                            </Col>
                        ))
                    }
                </Row>

            </Row>
            {/* footer section here */}
            <Row className='bg-primary  d-flex flex-column justify-content-end m-0 p-0' style={{ minHeight: '25em' }}>
                <Row className='d-flex py-2 bg-primary text-center text-light m-0' style={{ minHeight: '20em' }}>
                    <Col>a</Col>
                    <Col>b</Col>
                    <Col>c</Col>
                    <Col>d</Col>
                </Row>
                <Row className='bg-dark d-flex text-light align-items-center justify-content-center m-0' style={{ minHeight: '5em' }}>Floath Solution Hub 2023 All Right Reserved.</Row>
            </Row>

        </Container>
    )

}