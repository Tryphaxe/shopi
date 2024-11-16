import Prices from '@/components/Pricing/Prices'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div>
            <Prices />
            <div className="w-5/6 mx-auto lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-orange-600 to-[#ff9677] flex items-center justify-between flex-col lg:flex-row my-20">
                <div className="block text-center mb-5 lg:text-left lg:mb-0">
                    <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
                        Avez-vous des doutes ?
                    </h2>
                    <p className="text-xl text-indigo-100">
                    N'hésitez pas à nous contacter
                    </p>
                </div>
                <Link href="#" className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-orange-600 font-semibold py-4 px-8 transition-all duration-500">
                Contactez-nous
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5" stroke="#ff9677" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default page
