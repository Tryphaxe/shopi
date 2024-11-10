"use client";

import React from 'react'
import Carddetails from '@/components/Card/carddetails';
import Carte from '@/components/Maps/Carte';
import Tri from '@/components/Bar/Tri';
import "@/styles/scroll.css"
<<<<<<< HEAD
import Searchtwo from '@/components/Bar/Searchtwo';

const page = () => {
  return (
    <div className="h-[87vh] overflow-hidden">
      <div className="grid grid-rows-[auto, auto,1fr]">
        <Searchtwo />
        <Tri />

        <div className="grid grid-cols-2 max-h-[65vh]">
          {/* BLOC  */}
          <div className='px-5 py-2 overflow-hidden overflow-y-scroll bg-white shadow-sm'>
            <div className='mb-3 w-full grid grid-cols-3 gap-1 scrollbar-orange'>
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
=======

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
>>>>>>> c48826c (Version 10)
        </div>
      </div>
    </div>
  )
}

export default page