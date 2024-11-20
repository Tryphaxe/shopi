"use client";

import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Search from "@/components/Bar/Search";
import Cardchambre from "@/components/Card/cardchambre";

function page() {

    const images = [
        {
            original: "/img/avz.jpg",
            thumbnail: "/img/avz.jpg",
        },
        {
            original: "/img/back.jpg",
            thumbnail: "/img/back.jpg",
        },
        {
            original: "/img/hot2.jpg",
            thumbnail: "/img/hot2.jpg",
        },
        {
            original: "/img/pool.jpg",
            thumbnail: "/img/pool.jpg",
        },
        {
            original: "/img/slide1.jpg",
            thumbnail: "/img/slide1.jpg",
        },
        {
            original: "/img/slide3.jpg",
            thumbnail: "/img/slide3.jpg",
        },
    ];

    return (
        <div className="w-5/6 mx-auto py-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 mb-16">
                <div className="img">
                    <div className="img-box h-full max-lg:mx-auto">
                        <div className="h-full rounded-lg overflow-hidden">
                            <ImageGallery
                                items={images}
                                showPlayButton={false}
                                showFullscreenButton={true}
                                showThumbnails={true}
                                thumbnailPosition="bottom"
                                lazyLoad={true}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="data w-full xl:justify-start justify-center flexr max-lg:pb-10">
                    <div className="data w-full max-w-xl">
                        {/* <p className="text-lg font-medium leading-8 text-orange-600 mb-4">Clothing&nbsp; /&nbsp; Menswear
                                </p> */}
                        <h2 className="font-manrope font-bold text-4xl leading-10 text-gray-900 mb-2 capitalize">Basic
                            Résidence hôtelière Abidjan Marcory
                        </h2>
                        <p className="text-gray-500 text-md mb-2">
                            Hôtel Art déco à Marcory avec piscine extérieure et restaurant
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-3">
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
                        <p className="text-black font-semibold text-lg mb-2">
                            Commodités populaires
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
                        <button
                            className="text-center w-full px-5 py-2 rounded-lg bg-gray-200 mb-3 flex items-center justify-center font-semibold text-lg text-black shadow-sm transition-all duration-500 hover:bg-orange-700 hover:shadow-orange-400">
                            Voir sur la carte
                        </button>
                        <div className="flex items-center gap-3">
                            <button
                                className="group transition-all duration-500 w-12 h-10 rounded-full bg-orange-200 hover:bg-orange-100 hover:shadow-sm hover:shadow-orange-300">
                                <i className="fa-regular fa-heart m-0"></i>
                            </button>
                            <button
                                className="text-center w-full px-5 py-2 rounded-lg bg-orange-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-orange-700 hover:shadow-orange-400">
                                Sélectionnez une chamche
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <span className="text-3xl font-semibold text-gray-900">Choisissez une chambre</span>
            </div>

            <Search />

            <hr />
            <TabGroup className="bg-white px-3 py-4 rounded-lg">
                <TabList className="mb-3 transition-all duration-300">
                    <Tab className="text-xl data-[selected]:border-b-orange-500 data-[selected]:border-b data-[selected]:text-black outline-none mr-5 transition-all duration-300">Toutes les chambres</Tab>
                    <Tab className="text-xl data-[selected]:border-b-orange-500 data-[selected]:border-b data-[selected]:text-black outline-none mr-5 transition-all duration-300">1 Lit</Tab>
                    <Tab className="text-xl data-[selected]:border-b-orange-500 data-[selected]:border-b data-[selected]:text-black outline-none mr-5 transition-all duration-300">2 Lits</Tab>
                </TabList>
                <TabPanels>

                    {/* RECHERCHES POUR HOTELS */}
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-3">
                            <Cardchambre />
                            <Cardchambre />
                            <Cardchambre />
                        </div>
                    </TabPanel>

                    {/* RECHERCHE VOITURE */}
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-3">
                            <Cardchambre />
                        </div>
                    </TabPanel>

                    {/* RECHERCHE ACTIVITY */}
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-3">
                            <Cardchambre />
                            <Cardchambre />
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>


        </div>
    )
}

export default page