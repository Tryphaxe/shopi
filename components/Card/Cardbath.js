import React from 'react'
import Link from 'next/link'

function Cardbath() {
  return (
    <div className="max-w-80 min-w-64 h-min bg-white border border-gray-200 rounded-2xl shadow overflow-hidden relative">
        <Link href="/listing/12456">
            <a>
                <img className="z-10 rounded-t-lg w-full h-48 hover:scale-105 transition-all bg-center bg-contain" src="https://voogo.fr/wp-content/uploads/2021/11/251623919_425544605633703_4179423185897958966_n-1080x720.jpg" alt="evenement picture" />
            </a>
        </Link>

        <div className="p-3">
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
                <span className="text-md font-normal text-green-700">Plus de détails</span>
                <i className='fa-solid fa-chevron-right fa-xs text-green-700'></i>
            </Link>
            <div className='mt-3'>
                <span className='mt-5 fw-'>Prix : 25.000 Fcfa</span>
            </div>
        </div>
    </div >
  )
}

export default Cardbath
