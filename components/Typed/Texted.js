"use client"

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Texted = () => {
    // Référence à l'élément qui sera animé
  const typedElement = useRef(null); 
  // Référence à l'instance de Typed
  const typedInstance = useRef(null); 

  useEffect(() => {
    const options = {
      strings: ["Explorez les meilleurs endroits de la ville"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: false,
    };

    typedInstance.current = new Typed(typedElement.current, options);

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <div className='h-20'>
      <span ref={typedElement} className="text-lg sm:text-lg md:text-4xl lg:text-6xl text-white" />
    </div>
  );
};

export default Texted;