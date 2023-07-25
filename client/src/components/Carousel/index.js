import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import dzo1 from '../../assets/images/rentals/dzo1.png'
import dzo2 from '../../assets/images/rentals/dzo2.png'
import dzo3 from '../../assets/images/rentals/dzo3.png'
import dzo4 from '../../assets/images/rentals/dzo4.png'

const MyCarousel = () => {
    return (
        <Carousel data-bs-theme="dark" className=" carousel-img">
            <Carousel.Item >
                <img
                    className=""
                    src={dzo1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=""
                    src={dzo2}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=""
                    src={dzo3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    
                    src={dzo4}
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default MyCarousel;