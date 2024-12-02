"use client"

import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/slider.css"

export default function Carouseltexte() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 1000,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 5000,
    }

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="py-10 w-44 px-32 flex justify-center flex-col gap-y-5 bg-transparent">
                    <i className="fa-solid fa-hotel fa-2xl" style={{ color: "#FFD43B" }}></i>
                    <h6 className="text-white text-3xl font-normal">Trouvez un hôtel où séjourner et passer des moments inoubliables!</h6>
                </div>
                <div className="py-10 w-44 px-32 flex justify-center flex-col gap-y-5 bg-transparent">
                    <i className="fa-solid fa-champagne-glasses fa-2xl" style={{ color: "#74C0FC" }}></i>
                    <h6 className="text-white text-3xl font-normal">Soyez à l'écoute des évènement les plus chaud de babi</h6>
                </div>
                <div className="py-10 w-44 px-32 flex justify-center flex-col gap-y-5 bg-transparent">
                    <i className="fa-solid fa-store fa-2xl" style={{ color: "#B197FC" }}></i>
                    <h6 className="text-white text-3xl font-normal">Une boutique avec un large catalogue de vos produits préférés</h6>
                </div>
            </Slider>
        </div>
    )
}