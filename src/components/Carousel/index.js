import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    //updates currentIndex to the next index in order to change the image and cycle back
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };
    //does the same as handleNext but in reverse order 
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };
    //this take an index as a parameter and updates the current index 
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };
};

return (
    <div className="carousel">
        <img
            key={currentIndex}
            src={images[currentIndex]}
        /><div className='slide-direction'>
            <div className="left" onClick={handlePrevious}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20">
                    <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                </svg>
            </div>
            <div className="right" onClick={handleNext}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                >
                    <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                </svg>
            </div>
        </div>
        <div className="indicator">
            {images.map((_, index) => (
                <div
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                ></div>
            ))}
        </div>
    </div>
);

export default Carousel;