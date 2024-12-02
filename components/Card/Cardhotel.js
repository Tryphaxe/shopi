import React from 'react'
import Link from 'next/link'
import { Carousel } from "flowbite-react";

export default function Cardhotel() {
    return (
        <div className="relative overflow-hidden flex flex-col items-center border border-solid border-gray-200 rounded-xl transition-all duration-500 md:flex-row ">
            <div className="block overflow-hidden md:w-96 h-48">
                {/* <img src="https://pagedone.io/asset/uploads/1695365240.png" alt="Card image" className="h-full bg-cover bg-center" /> */}
                <Carousel slide={false} indicators={false}>
                    <img src="/img/avz.jpg" className='bg-cover bg-center h-full' />
                    <img src="/img/back.jpg" className='bg-cover bg-center h-full' />
                    <img src="/img/hot2.jpg" className='bg-cover bg-center h-full' />
                </Carousel>
            </div>
            <div className="px-4 w-full h-full">
                <Link href="/listing/12457">
                    <h5 className="text-2xl font-semibold tracking-tight text-black">Business studio, Double lit</h5>
                </Link>
                <Link href="/listing/12457" className=''>
                    <span className="text-md font-normal text-gray-500">Marcory</span>
                </Link>

                <ul className="grid grid-cols-2 w-max gap-2 my-2">
                    <li className="flex items-center gap-3">
                        <i className="fa-solid fa-car" style={{ color: "#128114" }}></i>
                        <span className="font-normal text-base text-[#128114] ">Free self parking</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="fa-solid fa-wifi"></i>
                        <span className="font-normal text-base text-gray-900 ">3 color shirt</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="fa-solid fa-user-group"></i>
                        <span className="font-normal text-base text-gray-900 ">Pure Cotton Shirt</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <i className="fa-solid fa-expand"></i>
                        <span className="font-normal text-base text-gray-900 ">all size is available</span>
                    </li>
                </ul>

                <div className='mt-3 flex items-center justify-between flex-row'>
                    <div>
                        <button className='bg-red-500 rounded-lg px-3 py-2 gap-2 flex items-center text-white'>
                            <i className='fa-regular fa-heart'></i>
                            <span>2,450</span>
                        </button>
                    </div>
                    <div className='text-right'>
                        <span className="text-xl font-semibold text-black">150.000 Fcfa</span>
                        <p className="text-md font-semibold text-black">Taxes et frais compris</p>
                    </div>
                </div>
            </div>
        </div>
    )
}