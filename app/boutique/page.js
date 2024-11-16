<<<<<<< HEAD
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='w-full h-full'>
        <section className="py-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="font-manrope font-bold text-4xl text-black mb-8">New Arrivals</h2>
                <div className="grid grid-cols-4 sm:grid-cols-4 xl:grid-cols-4 gap-8">
                    <Link href="/boutique/detailsproduit" className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                        <img className="rounded-2xl object-cover" src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="Jacket image" />
                        <div
                            className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-orange-200 group-hover:bg-orange-50">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="font-semibold text-base leading-7 text-black ">Trendy Jacket</h6>
                                <h6 className="font-semibold text-base leading-7 text-orange-600 text-right">$100</h6>
                            </div>
                            <p className="text-xs leading-5 text-gray-500">Women's Winter Wear</p>
                        </div>
                    </Link>
                    <Link href="/boutique/detailsproduit"
                        className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                        <img className="rounded-2xl object-cover" src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="Blazer image" />
                        <div
                            className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-orange-200 group-hover:bg-orange-50">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="font-semibold text-base leading-7 text-black ">Black Blazer</h6>
                                <h6 className="font-semibold text-base leading-7 text-orange-600 text-right">$100</h6>
                            </div>
                            <p className="text-xs leading-5 text-gray-500">Men’s Suits</p>
                        </div>
                    </Link>
                    <Link href="/boutique/detailsproduit"
                        className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                        <img className="rounded-2xl object-cover" src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="printed top image" />
                        <div
                            className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-orange-200 group-hover:bg-orange-50">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="font-semibold text-base leading-7 text-black ">Red Flowers</h6>
                                <h6 className="font-semibold text-base leading-7 text-orange-600 text-right">$100</h6>
                            </div>
                            <p className="text-xs leading-5 text-gray-500">Womenswear</p>
                        </div>
                    </Link>

                    <Link href="/boutique/detailsproduit"
                        className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                        <img className="rounded-2xl object-cover" src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="Denim jacket image" />
                        <div
                            className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-orange-200 group-hover:bg-orange-50">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                                <h6 className="font-semibold text-base leading-7 text-orange-600 text-right">$100</h6>
                            </div>
                            <p className="text-xs leading-5 text-gray-500">Children Wear</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
        <section className="py-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="font-manrope font-bold text-4xl text-black mb-8">New Arrivals</h2>
                <div className="grid grid-cols-4 sm:grid-cols-4 xl:grid-cols-4 gap-8">
                    <Link href="/boutique/detailsproduit" className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                        <img className="rounded-2xl object-cover" src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="Jacket image" />
                        <div
                            className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-orange-200 group-hover:bg-orange-50">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="font-semibold text-base leading-7 text-black ">Trendy Jacket</h6>
                                <h6 className="font-semibold text-base leading-7 text-orange-600 text-right">$100</h6>
                            </div>
                            <p className="text-xs leading-5 text-gray-500">Women's Winter Wear</p>
                        </div>
                    </Link>
                    <Link href="/boutique/detailsproduit"
                        className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                        <img className="rounded-2xl object-cover" src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="Blazer image" />
                        <div
                            className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-orange-200 group-hover:bg-orange-50">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="font-semibold text-base leading-7 text-black ">Black Blazer</h6>
                                <h6 className="font-semibold text-base leading-7 text-orange-600 text-right">$100</h6>
                            </div>
                            <p className="text-xs leading-5 text-gray-500">Men’s Suits</p>
                        </div>
                    </Link>
                    <Link href="/boutique/detailsproduit"
                        className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
                        <img className="rounded-2xl object-cover" src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="printed top image" />
                        <div
                            className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-orange-200 group-hover:bg-orange-50">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="font-semibold text-base leading-7 text-black ">Red Flowers</h6>
                                <h6 className="font-semibold text-base leading-7 text-orange-600 text-right">$100</h6>
                            </div>
                            <p className="text-xs leading-5 text-gray-500">Womenswear</p>
                        </div>
                    </Link>

                    <Link href="/boutique/detailsproduit"
                        className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:ml-0 xl:mx-auto cursor-pointer">
                        <img className="rounded-2xl object-cover" src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="Denim jacket image" />
                        <div
                            className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-orange-200 group-hover:bg-orange-50">
                            <div className="flex items-center justify-between mb-2">
                                <h6 className="font-semibold text-base leading-7 text-black ">Denim Jacket</h6>
                                <h6 className="font-semibold text-base leading-7 text-orange-600 text-right">$100</h6>
                            </div>
                            <p className="text-xs leading-5 text-gray-500">Children Wear</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope font-bold text-3xl min-[400px]:text-4xl text-black mb-8 max-lg:text-center">Available Products</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Link href="/boutique/detailsproduit" className="max-w-[384px] mx-auto">
                    <div className="w-full max-w-sm aspect-square">
                        <img src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="cream image" className="w-full h-full rounded-xl object-cover" />
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                        <div className="">
                            <h6 className="font-medium text-xl leading-8 text-black mb-2">Skin care cream</h6>
                            <h6 className="font-semibold text-xl leading-8 text-orange-600">$74.99</h6>
                        </div>
                        <button
                            className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </Link>

                <Link href="/boutique/detailsproduit" className="max-w-[384px] mx-auto">
                    <div className="w-full max-w-sm aspect-square">
                        <img src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="cream image" className="w-full h-full rounded-xl object-cover" />
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                        <div className="">
                            <h6 className="font-medium text-xl leading-8 text-black mb-2">Men’s Facial</h6>
                            <h6 className="font-semibold text-xl leading-8 text-orange-600">$25</h6>
                        </div>
                        <button
                            className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </Link>

                <Link href="/boutique/detailsproduit" className="max-w-[384px] mx-auto">
                    <div className="w-full max-w-sm aspect-square relative">
                        <img src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="serum bottle image" className="w-full h-full rounded-xl object-cover" />
                        <span
                            className="py-1 min-[400px]:py-2 px-2 min-[400px]:px-4 cursor-pointer rounded-lg bg-gradient-to-tr from-orange-600 to-purple-600 font-medium text-base leading-7 text-white absolute top-3 right-3 z-10">20%
                            Off</span>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                        <div className="">
                            <h6 className="font-medium text-xl leading-8 text-black mb-2">Dark circles serum</h6>
                            <h6 className="font-semibold text-xl leading-8 text-orange-600">$199.99</h6>
                        </div>
                        <button
                            className="p-2 min-[400px]:p-4 rounded-full bg-white border border-gray-300 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
=======
import React from 'react'

const page = () => {
  return (
    <div>
      
>>>>>>> c48826c (Version 10)
    </div>
  )
}

export default page
