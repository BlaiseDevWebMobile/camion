import React from 'react';
import './Carousel.css'
import {Carousel, Image} from "react-bootstrap";
import slide1 from '../../assets/car2.png'
import slide2 from '../../assets/car2.png'


const CarouselSlide = () => {
    return (
        <>
            <Carousel fade className={'imageSlide'}>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 imageSlide"
                        src={slide1}
                        alt="First slide"
                        height={100}
                    />
                    <Carousel.Caption>
                        <h3>Camion Daf</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 imageSlide"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Camion Man</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>


                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 imageSlide"
                        src={slide1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Mercedes</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default CarouselSlide;
