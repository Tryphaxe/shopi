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
    <div className='h-max mb-3'>
      <span ref={typedElement} className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl md:text-white text-gray-950" />
      <p className="text-lg text-gray-700  md:text-orange-100 relative mb-2">
        Trouvez quelques-uns des meilleurs conseils de nos partenaires
      </p>
    </div>
  );
};

export default Texted;