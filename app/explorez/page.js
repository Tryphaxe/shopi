"use client";

import React from 'react'
import Carte from '@/components/Maps/Carte';
import Tri from '@/components/Bar/Tri';
import "@/styles/scroll.css"
import Searchtwo from '@/components/Bar/Searchtwo';
import Carddetail from '@/components/Card/Carddetail';

const page = () => {
  return (
    <div className="h-full md:h-[87vh] overflow-hidden">
      <div className="grid grid-rows-[auto, auto,1fr]">
        <Searchtwo />
        <Tri />

        <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[65vh]">
          {/* BLOC  */}
          <div className='px-5 py-2 overflow-hidden md:overflow-y-scroll bg-white shadow-sm'>
            <div className='mb-3 w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:scrollbar-orange'>
              <Carddetail />
              <Carddetail />
              <Carddetail />
              <Carddetail />
              <Carddetail />
            </div>
          </div>

          {/* CARTE  */}
          <div className='hidden md:block'>
            <Carte />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page