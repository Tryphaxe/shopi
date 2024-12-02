import React from 'react'

export default function ProfilHeader() {
  return (
    <section className="relative pt-40 border-b mb-3">
      <div className="bg-[url('/img/slide1.jpg')] w-full absolute top-0 left-0 z-0 h-60 bg-cover bg-center"></div>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
          <img src="/img/pavicon.png" alt="user-avatar-image" className="h-36 w-36 border-4 border-solid border-white rounded-full shadow-md object-cover" />
        </div>
        <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
          <div className="block">
            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1">Nom de l'hôtel</h3>
            <p className="font-normal text-base leading-7 text-gray-500">Description de l'hôtel</p>
          </div>
          <div
            className="rounded-full py-3.5 px-5 bg-gray-100 flex items-center group transition-all duration-500 hover:bg-orange-100 ">
            <i className='fa-solid fa-location-dot stroke-gray-700 transition-all duration-500 group-hover:stroke-orange-600'></i>
            <span className="px-2 font-medium text-base leading-7 text-gray-700 transition-all duration-500 group-hover:text-orange-600">
              Position de l'établissement
            </span>
          </div>
        </div>
      </div>
    </section>

  )
}
