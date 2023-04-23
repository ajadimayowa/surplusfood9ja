import React from "react";
import { Row, Card, Button,Col } from "react-bootstrap";


const CatCard = ({cat,position, itemLength}) => {
    console.log({position,itemLength})
    
    
    return (
        <Col className='d-flex shadow-sm text-center flex-column justify-content-end m-0 p-0' style={{ minHeight: '20em', maxWidth:'15em', cursor: 'pointer', fontFamily: 'Montserrat',  backgroundColor:cat?.bgColor }}>
            <img src={cat?.catImage} alt='category image' className='p-3' style={{ maxHeight: '10em', cursor: 'pointer' }} />
            <div className="rounded-bottom" style={{backgroundColor:cat?.descColor }}>
            <p className='p-0 m-0 mt-1 text-light' style={{ fontWeight: '700' }} >{cat?.title}</p>
            <p className='p-0 m-0 px-3 text-light mt-1'style={{ fontSize:'0.8em' }} >{cat?.description}</p>
            <div className='mt-4 py-2'>
                <Button className=' border border-0' style={{backgroundColor:'#FF7C02'}}>{position == itemLength -1?'Call us':'Shop now'}</Button>
            </div>
            </div>

        </Col>
    )
}
export default CatCard;