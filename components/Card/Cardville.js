import Link from 'next/link'
import React from 'react'

const Cardville = () => {
  return (
    <div className="min-w-72 relative flex items-center justify-center h-[200px]">
      <div className="group bg-white shadow-lg shadow-gray-200 rounded-xl relative transition-all duration-500 w-full h-full flex items-center justify-center hover:shadow-gray-300 bg-[url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/af/40/97/caption.jpg')] bg-center bg-cover">
        <div className="flex flex-col items-center justify-between w-full h-full py-6 gap-4 text-center relative z-10">
          <h4 className="font-manrope font-bold text-3xl text-white text-center leading-snug">Abidjan</h4>
          <div className="flex items-center justify-center w-full gap-4">
            <h6 className="text-xl font-medium text-white ">Côte d'Ivoire</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardville
