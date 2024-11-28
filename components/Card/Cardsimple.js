import Link from 'next/link'
import React from 'react'

const Cardsimple = () => {
    return (
        <div className="max-w-64 min-w-56 mx-2 bg-white border border-gray-200 rounded-2xl shadow overflow-hidden relative">
            <span className="bg-blue-100 text-blue-800 flex items-center gap-2 text-md font-medium me-2 px-3 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-300 absolute right-0 m-2"><i className='fa-solid fa-hotel text-yellow-300'></i>Hôtel</span>
            <Link href="/listing/121124">
                <img className="rounded-t-lg w-full h-50" src="./img/vojtech.jpg" alt="evenement picture" />
            </Link>
            <div className="p-3">
                <Link href="/listing/17112024">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-black">Nakama Motel</h5>
                </Link>
                <p className="flex items-center gap-2 mb-3 font-normal text-gray-700 dark:text-gray-400"><i className='fa-solid fa-location-dot text-yellow-300'></i>Plateau, Abidjan</p>
            </div>
        </div>

    )
}

export default Cardsimple
