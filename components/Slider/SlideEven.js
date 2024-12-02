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
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024, // Jusqu'à 1024px
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode: false,
              },
            },
            {
              breakpoint: 768, // Jusqu'à 768px
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              },
            },
            {
              breakpoint: 480, // Jusqu'à 480px
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false, // Masquer les flèches de navigation
              },
            },
          ],
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