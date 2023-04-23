import React from "react";
import { Row,Card } from "react-bootstrap";
import { taglines } from "../assets/texts";
import groceryStore from '../assets/images/grocery-store.svg';
import dollar from '../assets/images/dollar.svg';
import delivery from '../assets/images/delivery.svg';


const ServiceDescription = () => {
    const tagIcons = [groceryStore, dollar, delivery];
    return (
        <Row className=" m-0 mb-2" style={{ minHeight: '10em', backgroundColor: '#F4F4F4' }}>
            <div className='d-flex justify-content-center align-items-center flex-row gap-4'>
                {
                    taglines.map((tags, index) => (
                        <div key={index} className='d-flex gap-2 p-2 justify-content-center align-items-center'  style={{maxHeight: '12em', minWidth: '1em', maxWidth:'23em' }}>
                            <Card className='shadow-sm border border-0 p-3 rounded rounded-4' style={{ minHeight: '6em',maxHeight: '6em', minWidth: '6em' }}>
                                <Card.Body className='d-flex align-items-center justify-content-center'>
                                    <img alt=' ' src={tagIcons[index]} height={'50em'} className="d-flex align-items-center justify-content-center"/>
                                </Card.Body>
                            </Card>
                            <div>
                            <h5 style={{ fontFamily: 'Montserrat-SemiBold', fontSize: '0.9em' }}>{tags.title}</h5>
                            <p className='p-0 m-0 text-center'
                                style={{ fontFamily: 'Montserrat-Regular', fontSize: '0.8em', textAlign: 'center' }}>{tags.info}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Row>
    )
}
export default ServiceDescription;