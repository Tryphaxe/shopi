import React from 'react'
import Link from 'next/link'

function Cardbath() {
    return (
        <div className="max-w-80 min-w-64 h-min bg-white border border-gray-200 rounded-2xl shadow overflow-hidden relative">
            <Link href="/listing/12456">
                <img className="z-10 rounded-t-lg w-full h-48 hover:scale-105 transition-all bg-center bg-contain" src="/img/vojtech.jpg" alt="evenement picture" />
            </Link>

            <form className="p-3">
                <Link href="/listing/12457">
                    <h5 className="text-xl font-bold tracking-tight text-black">Business studio, Double lit</h5>
                </Link>
                <ul className="grid gap-y-2 mb-4">
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
                <Link href="#details" className='gap-3 flex items-center'>
                    <span className="text-md font-semibold text-blue-700">Plus de détails</span>
                    <i className='fa-solid fa-chevron-right fa-xs text-blue-700'></i>
                </Link>

                <hr className='my-3' />

                <Link href="#details" className='gap-3 flex items-center'>
                    <span className="text-md font-semibold text-black">Extras</span>
                </Link>
                <div className="flex items-center my-4">
                    <input defaultChecked id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  />
                        <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pas d'extras</label>
                </div>
                <div className="flex items-center">
                    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Petit-déjeuners</label>
                </div>

                <div className='mt-3 grid grid-cols-2'>
                    <div>
                        <span className="text-md font-semibold text-black">150.000 Fcfa</span>
                        <p className="text-md font-semibold text-black">Taxes et frais compris</p>
                    </div>
                    <div className='flex items-end justify-end'>
                        <button className='rounded-full  px-5 py-2 bg-green-800 text-white text-md font-semibold'>Réserver</button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Cardbath