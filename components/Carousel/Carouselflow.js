"use client"

import { Carousel } from "flowbite-react";

const Carouselflow = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-10">
      <Carousel slideInterval={10000}>
        {/* <img src="/img/slide1.jpg" alt="Slide 1" className="w-full h-auto" />
        <img src="/img/slide2.webp" alt="Slide 2" className="w-full h-auto" />
        <img src="/img/slide3.jpg" alt="Slide 3" className="w-full h-auto" /> */}
        <div className="flex h-full items-center justify-center bg-[url('/img/slide1.jpg')] bg-cover bg-center">
          <p className="bg-black bg-opacity-65 text-lg rounded-xl text-white text-center px-3 py-2">
            Lorem ipsum dolor sit amet perpetum jaletus immunn consectus paratas <br />
            infictus magis cam sancte spiritus pastis cantunim psisctai gaisumn
          </p>
        </div>
        <div className="flex h-full items-center justify-center bg-[url('/img/slide2.webp')] bg-cover bg-center">
          <p className="bg-black bg-opacity-65 text-lg rounded-xl text-white text-center px-3 py-2">
            Lorem ipsum dolor sit amet perpetum jaletus immunn consectus paratas <br />
            infictus magis cam sancte spiritus pastis cantunim psisctai gaisumn
          </p>
        </div>
        <div className="flex h-full items-center justify-center bg-[url('/img/slide3.jpg')] bg-cover bg-center">
          <p className="bg-black bg-opacity-65 text-lg rounded-xl text-white text-center px-3 py-2">
            Lorem ipsum dolor sit amet perpetum jaletus immunn consectus paratas <br />
            infictus magis cam sancte spiritus pastis cantunim psisctai gaisumn
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselflow;
