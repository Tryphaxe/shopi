"use client";

import React from 'react'
import Carddetails from '@/components/Card/carddetails';
import Carte from '@/components/Maps/Carte';
import Tri from '@/components/Bar/Tri';
import "@/styles/scroll.css"

const page = () => {
  return (
    <div className="grid grid-rows-[auto,1fr]">
      <Tri />

      <div className="grid grid-cols-2 h-[78vh]">
        {/* BLOC  */}
        <div className='overflow-hidden overflow-y-scroll bg-white shadow-sm'>
          <div className='w-full grid grid-cols-2 px-3 gap-3 scrollbar-orange'>
            <Carddetails />
            <Carddetails />
            <Carddetails />
            <Carddetails />
            <Carddetails />
          </div>
        </div>

        {/* CARTE  */}
        <div className=''>
          <Carte />
        </div>
      </div>
    </div>
  )
}

export default page