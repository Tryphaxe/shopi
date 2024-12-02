"use client";

import { Carousel } from "flowbite-react";
import React from 'react'

function page() {
    return (
        <div className="w-5/6 mx-auto py-3">
            <section className="relative ">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-0 h-1/2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
                        <div className="img h-3/4">
                            <div className="img-box h-full max-lg:mx-auto">
                                <div className="h-full rounded-lg overflow-hidden">
                                    <Carousel slide={false}>
                                        <img src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="..." />
                                        <img src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="..." />
                                        <img src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="..." />
                                        <img src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="..." />
                                        <img src="https://lequotidien.sn/wp-content/uploads/2019/02/produits-alimentaire.jpg" alt="..." />
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        <div
                            className="data w-full xl:justify-start justify-center flexr max-lg:pb-10">
                            <div className="data w-full max-w-xl">
                                {/* <p className="text-lg font-medium leading-8 text-orange-600 mb-4">Clothing&nbsp; /&nbsp; Menswear
                                </p> */}
                                <h2 className="font-manrope font-bold text-2xl leading-10 text-gray-900 mb-2 capitalize">Basic
                                    Yellow
                                    Tropical Printed Shirt</h2>
                                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                    <h6
                                        className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                                        50.000 Fcfa</h6>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                            <i className="fa-solid fa-star" style={{ color: "#F3F4F6" }}></i>
                                        </div>
                                        <span className="pl-2 font-normal leading-7 text-gray-500 text-sm ">1624 review</span>
                                    </div>

                                </div>
                                <p className="text-gray-500 text-base font-normal mb-5">
                                    Introducing our vibrant Basic Yellow Tropical Printed Shirt - a celebration of style and
                                    sunshine! Embrace the essence of summer wherever you go
                                    <a href="#" className="text-orange-600">More....</a>
                                </p>
                                <ul className="grid gap-y-2 mb-4">
                                    <li className="flex items-center gap-3">
                                        <i className="fa-solid fa-circle-check" style={{ color: "#128114" }}></i>
                                        <span className="font-normal text-base text-gray-900 ">Branded shirt</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fa-solid fa-circle-check" style={{ color: "#128114" }}></i>
                                        <span className="font-normal text-base text-gray-900 ">3 color shirt</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fa-solid fa-circle-check" style={{ color: "#128114" }}></i>
                                        <span className="font-normal text-base text-gray-900 ">Pure Cotton Shirt with 60% as
                                            40%
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <i className="fa-solid fa-circle-check" style={{ color: "#128114" }}></i>
                                        <span className="font-normal text-base text-gray-900 ">all size is available</span>
                                    </li>
                                </ul>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                                    <div className="flex sm:items-center sm:justify-center w-full bg-green-50 rounded-lg">
                                        <button
                                            className="border-none group p-3 border bg-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                        <input type="text"
                                            className="font-semibold text-gray-900 cursor-pointer text-lg px-3 py-0 w-full sm:max-w-[80px] outline-0 border-y-0 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                                            placeholder="1" />
                                        <button
                                            className="border-none group p-3 border bg-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                                            <i className="fa-regular fa-plus"></i>
                                        </button>
                                    </div>
                                    <button
                                        className="group py-2 px-5 rounded-lg bg-orange-50 text-orange-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-orange-100">
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        Add to cart</button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        className="group transition-all duration-500 w-12 h-10 rounded-full bg-orange-200 hover:bg-orange-100 hover:shadow-sm hover:shadow-orange-300">
                                        <i className="fa-regular fa-heart m-0"></i>
                                    </button>
                                    <button
                                        className="text-center w-full px-5 py-2 rounded-lg bg-orange-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-orange-700 hover:shadow-orange-400">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page