import Cardbath from '@/components/Card/Cardbath'
import Cardbed from '@/components/Card/Cardbed'
import React from 'react'

export default function page() {
    return (
        <div className='py-5'>
            <div
                className="flex items-center bg-white px-5 py-2 justify-between"
            >
                <h4 className="flex items-center gap-3 text-lg font-semibold text-gray-600 dark:text-gray-300">
                    <i className="fa-solid fa-bed"></i>
                    Liste des chambres
                </h4>

                <button type="submit" className="flex items-center gap-x-3 rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                    <i className='fa-solid fa-plus'></i>
                    Ajouter une chambre
                </button>
            </div>

            <div className='grid grid-cols-3 py-3 gap-3'>
                <Cardbed />
                <Cardbed />
                <Cardbed />
                <Cardbed />
                <Cardbed />
            </div>

        </div>
    )
}