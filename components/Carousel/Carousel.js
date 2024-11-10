"use client";

import { useEffect } from 'react';

const Carousel = () => {
  useEffect(() => {
    const carousel = document.getElementById('carousel');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    let index = 0;

    next.addEventListener('click', () => {
      index = (index + 1) % 3; // 3 correspond au nombre total de slides
      carousel.style.transform = `translateX(-${index * 100}%)`;
    });

    prev.addEventListener('click', () => {
      index = (index - 1 + 3) % 3;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    });

    return () => {
      // Nettoyage des écouteurs d'événements
      next.removeEventListener('click', () => {});
      prev.removeEventListener('click', () => {});
    };
  }, []); // S'assurer que l'effet s'exécute seulement une fois au chargement du composant

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" id="carousel">
        <div className="min-w-full bg-transparent text-white flex items-center justify-center h-64">Slide 1</div>
        <div className="min-w-full bg-transparent text-white flex items-center justify-center h-64">Slide 2</div>
        <div className="min-w-full bg-transparent text-white flex items-center justify-center h-64">Slide 3</div>
      </div>

      <button id="prev" className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2">
        <i className="fa-solid fa-chevron-left" style={{color: "white"}}></i>
      </button>
      <button id="next" className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2">
        <i className="fa-solid fa-chevron-right" style={{color: "white"}}></i>
      </button>
    </div>
  );
};

export default Carousel;