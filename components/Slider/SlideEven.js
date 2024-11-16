"use client"

import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cardsimple from '../Card/Cardsimple';

export default function SlideEven() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }

    return (
        <div className="">
            <Slider {...settings}>
                <div><Cardsimple /></div>
                <div><Cardsimple /></div>
                <div><Cardsimple /></div>
                <div><Cardsimple /></div>
                <div><Cardsimple /></div>
                <div><Cardsimple /></div>
                <div><Cardsimple /></div>
                <div><Cardsimple /></div>
            </Slider>
        </div>
    )
}