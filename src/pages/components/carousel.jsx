import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pepperC1 from '../../assets/images/carousel1/pepperC1.svg'
import riceC1 from '../../assets/images/carousel1/riceC1.svg'
import yamC1 from '../../assets/images/carousel1/yamC1.svg'

function DefaultCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} className='p-0' controls={false} interval={3000} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pepperC1}
                    alt="pepper"
                />
                <Carousel.Caption>
                    <h3>Amazing Deals on Soup Items</h3>
                    <p>We are big on cooking soup, We love to eat too.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={riceC1}
                    alt="rice"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={yamC1}
                    alt="pepper"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DefaultCarousel;