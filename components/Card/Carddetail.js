import Link from 'next/link'
import React from 'react'

const Carddetail = () => {
    return (
        <div className="max-w-64 min-w-50 h-min bg-white border border-gray-200 rounded-2xl shadow overflow-hidden relative">
            <span className="z-20 bg-blue-100 text-blue-800 flex items-center gap-2 text-md font-medium me-2 px-3 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-300 absolute right-0 m-2"><i className='fa-solid fa-hotel text-yellow-300'></i>Hôtel</span>
            <Link href="/listing/12456">
                <img className="z-10 rounded-t-lg w-full h-50 hover:scale-105 transition-all bg-center bg-contain" src="/img/vojtech.jpg" alt="evenement picture" />
            </Link>
            <div className="p-3">
                <Link href="/listing/12457">
                    <h5 className="text-xl font-bold tracking-tight text-black">Nakama Motel</h5>
                </Link>
                <Link href="/listing/12458">
                    <h2 className="mb-2 text-sm text-gray-700">Motel très class avec toutes les commodités possibles...</h2>
                </Link>
                <p className="flex items-center gap-2 text-sm text-black dark:text-gray-400"><i className='fa-solid fa-location-dot text-yellow-300'></i>Angré, Cocody</p>
                
            <div className='mt-3'>
            <span className='mt-5 fw-'>Prix : 25.000 Fcfa</span>
            </div>
            </div>
            {/* <div className="flex items-center gap-2 mb-3 font-normal px-5">
                <div className="flex items-center rounded-full p-3 bg-yellow-500 bg-opacity-35"><i className='fa-solid fa-wind'></i></div>
                <div className="flex items-center rounded-full p-3 bg-yellow-500 bg-opacity-35"><i className='fa-solid fa-person-swimming'></i></div>
                <div className="flex items-center rounded-full p-3 bg-yellow-500 bg-opacity-35"><i className='fa-solid fa-house-signal'></i></div>
            </div> */}
        </div >

    )
}

export default Carddetail
