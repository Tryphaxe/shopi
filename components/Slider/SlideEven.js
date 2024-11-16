"use client"

import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cardsimple from '../Card/Cardsimple';
import "@/styles/slider.css"

export default function SlideEven() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        speed: 2000,
        cssEase: "linear"
    }

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <Cardsimple />
                <Cardsimple />
                <Cardsimple />
                <Cardsimple />
                <Cardsimple />
                <Cardsimple />
            </Slider>
        </div>
    )
}