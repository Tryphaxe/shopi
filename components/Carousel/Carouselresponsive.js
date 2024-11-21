import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carouselresponsive() {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showIndicators={false}
            thumbWidth={50}
            dynamicHeight={true}
        >
            <div>
                <img src="/img/avz.jpg" />
            </div>
            <div>
                <img src="/img/back.jpg" />
            </div>
            <div>
                <img src="/img/hot2.jpg" />
            </div>
            <div>
                <img src="/img/slide1.jpg" />
            </div>
            <div>
                <img src="/img/pool.jpg" />
            </div>
            <div>
                <img src="/img/slide3.jpg" />
            </div>
        </Carousel>
    )
}

export default Carouselresponsive