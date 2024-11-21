"use client";

import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Search from "@/components/Bar/Search";
import Cardbath from "@/components/Card/Cardbath";
import Carouselresponsive from "@/components/Carousel/Carouselresponsive";

function page() {

    return (
        <div className="w-5/6 mx-auto py-5">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 mb-16">
                <div className="img">
                    <div className="img-box h-full max-lg:mx-auto">
                        <div className="h-full rounded-lg overflow-hidden">
                            <Carouselresponsive />
                        </div>
                    </div>
                </div>
                <div className="data w-full xl:justify-start justify-center flexr max-lg:pb-10">
                    <div className="data w-full max-w-xl">
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
                            className="text-center w-full px-5 py-2 rounded-lg bg-gray-200 mb-3 flex items-center justify-center font-semibold text-lg text-black shadow-sm transition-all duration-500 hover:bg-gray-700 hover:shadow-gray-400">
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
                    <Tab className="text-xl data-[selected]:border-b-green-800 data-[selected]:border-b data-[selected]:text-black outline-none mr-5 transition-all duration-300">Toutes les chambres</Tab>
                    <Tab className="text-xl data-[selected]:border-b-green-800 data-[selected]:border-b data-[selected]:text-black outline-none mr-5 transition-all duration-300">1 Lit</Tab>
                    <Tab className="text-xl data-[selected]:border-b-green-800 data-[selected]:border-b data-[selected]:text-black outline-none mr-5 transition-all duration-300">2 Lits</Tab>
                </TabList>
                <TabPanels>

                    {/* RECHERCHES POUR HOTELS */}
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-3">
                            <Cardbath />
                            <Cardbath />
                            <Cardbath />
                        </div>
                    </TabPanel>

                    {/* RECHERCHE VOITURE */}
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-3">
                            <Cardbath />
                        </div>
                    </TabPanel>

                    {/* RECHERCHE ACTIVITY */}
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-3">
                            <Cardbath />
                            <Cardbath />
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>

            <section className="w-full relative overflow-hidden my-10">
                <div className="">
                    <div className="flex flex-col md:flex-row w-full gap-8">
                        <div className="w-full md:max-w-[176px] md:border-r md:border-gray-200 pr-5">
                            <span className="font-bold text-3xl leading-7 text-black">A propos de cette propriété</span>
                        </div>
                        <div className="w-full tab-pane max-md:px-4">
                            <span className="font-manrope font-bold lg:text-4xl text-xl text-gray-900 mb-5">Résidence hôtelière Abidjan Marcory</span>
                            <p className="font-normal text-md max-w-xl text-gray-500 lg:mb-10 mb-8">
                                Profitez de votre passage à Abidjan pour séjourner à l'établissement
                                Aparthotel Adagio Abidjan Marcory. Vous pourrez vous baigner
                                dans la piscine extérieure, manger un morceau au café/café
                                ou vous détendre avec un verre au bar/salon.
                            </p>

                            <span className="font-manrope font-bold lg:text-4xl text-xl text-gray-900 mb-5">Langues</span>
                            <p className="font-normal text-lg leading-8 text-gray-500 lg:mb-5 mb-4">
                                Français, Anglais
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full relative overflow-hidden">
                <div className="">
                    <div className="flex flex-col md:flex-row w-full gap-8">
                        <div className="w-full md:max-w-[176px] md:border-r md:border-gray-200 pr-5">
                            <span className="font-bold text-3xl leading-7 text-black">Frais et politique</span>
                        </div>
                        <div className="w-full tab-pane max-md:px-4">
                            <span className="font-manrope font-bold lg:text-4xl text-xl text-gray-900 mb-5">Supplément en option</span>
                            <p className="font-normal text-md max-w-xl text-gray-500 lg:mb-10 mb-4">
                                Petit déjeuner buffet est offert moyennant un supplément d'environ 16000 XOF par personne
                            </p>

                            <span className="font-manrope font-bold lg:text-4xl text-xl text-gray-900 mb-5">Politiques</span>
                            <p className="font-normal text-lg leading-8 text-gray-500 lg:mb-10 mb-8">
                                Cet établissement accepte les cartes de crédit, les cartes de débit et les espèces.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                    <form className="">
                        <div className="gap-4 sm:flex sm:items-center sm:justify-between">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Avis réçents</h2>
                            <div className="mt-6 sm:mt-0">
                                <button className="text-lg bg-white border border-green-900 text-green-800 px-5 py-2 rounded-full">Laisser un commentaire</button>
                            </div>
                        </div>
                        <hr className="mt-2"/>
                        <div className="mt-6 flow-root sm:mt-8">
                            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                <div className="grid md:grid-cols-12 gap-4 md:gap-6 pb-4 md:pb-6">
                                    <dl className="md:col-span-3 order-3 md:order-1">
                                        <dt className="sr-only">Product:</dt>
                                        <dd className="text-base font-semibold text-gray-900 dark:text-white">
                                            <a href="#" className="hover:underline">Dupond Armine</a>
                                        </dd>
                                    </dl>

                                    <dl className="md:col-span-6 order-4 md:order-2">
                                        <dt className="sr-only">Message:</dt>
                                        <dd className=" text-gray-500 dark:text-gray-400">It’s fancy, amazing keyboard, matching accessories. Super fast, batteries last more than usual, everything runs perfect in this...</dd>
                                    </dl>

                                    <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                                        <dl>
                                            <dt className="sr-only">Stars:</dt>
                                            <dd className="flex items-center space-x-1">
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                            </dd>
                                        </dl>
                                        <button id="actionsMenuDropdown1" data-dropdown-toggle="dropdownOrder1" type="button" className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <span className="sr-only"> Actions </span>
                                            <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="4" d="M6 12h.01m6 0h.01m5.99 0h.01"></path>
                                            </svg>
                                        </button>
                                        <div id="dropdownOrder1" className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700" data-popper-placement="bottom">
                                            <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="actionsMenuDropdown1">
                                                <li>
                                                    <button type="button" data-modal-target="editReviewModal" data-modal-toggle="editReviewModal" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                                        </svg>
                                                        <span>Edit review</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" data-modal-target="deleteReviewModal" data-modal-toggle="deleteReviewModal" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500">
                                                        Delete review
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flow-root sm:mt-8">
                            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                <div className="grid md:grid-cols-12 gap-4 md:gap-6 pb-4 md:pb-6">
                                    <dl className="md:col-span-3 order-3 md:order-1">
                                        <dt className="sr-only">Product:</dt>
                                        <dd className="text-base font-semibold text-gray-900 dark:text-white">
                                            <a href="#" className="hover:underline">Dupond Armine</a>
                                        </dd>
                                    </dl>

                                    <dl className="md:col-span-6 order-4 md:order-2">
                                        <dt className="sr-only">Message:</dt>
                                        <dd className=" text-gray-500 dark:text-gray-400">It’s fancy, amazing keyboard, matching accessories. Super fast, batteries last more than usual, everything runs perfect in this...</dd>
                                    </dl>

                                    <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                                        <dl>
                                            <dt className="sr-only">Stars:</dt>
                                            <dd className="flex items-center space-x-1">
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                            </dd>
                                        </dl>
                                        <button id="actionsMenuDropdown1" data-dropdown-toggle="dropdownOrder1" type="button" className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <span className="sr-only"> Actions </span>
                                            <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="4" d="M6 12h.01m6 0h.01m5.99 0h.01"></path>
                                            </svg>
                                        </button>
                                        <div id="dropdownOrder1" className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700" data-popper-placement="bottom">
                                            <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="actionsMenuDropdown1">
                                                <li>
                                                    <button type="button" data-modal-target="editReviewModal" data-modal-toggle="editReviewModal" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                                        </svg>
                                                        <span>Edit review</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" data-modal-target="deleteReviewModal" data-modal-toggle="deleteReviewModal" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500">
                                                        Delete review
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flow-root sm:mt-8">
                            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                <div className="grid md:grid-cols-12 gap-4 md:gap-6 pb-4 md:pb-6">
                                    <dl className="md:col-span-3 order-3 md:order-1">
                                        <dt className="sr-only">Product:</dt>
                                        <dd className="text-base font-semibold text-gray-900 dark:text-white">
                                            <a href="#" className="hover:underline">Dupond Armine</a>
                                        </dd>
                                    </dl>

                                    <dl className="md:col-span-6 order-4 md:order-2">
                                        <dt className="sr-only">Message:</dt>
                                        <dd className=" text-gray-500 dark:text-gray-400">It’s fancy, amazing keyboard, matching accessories. Super fast, batteries last more than usual, everything runs perfect in this...</dd>
                                    </dl>

                                    <div className="md:col-span-3 content-center order-1 md:order-3 flex items-center justify-between">
                                        <dl>
                                            <dt className="sr-only">Stars:</dt>
                                            <dd className="flex items-center space-x-1">
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                                <svg className="w-5 h-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                                                </svg>
                                            </dd>
                                        </dl>
                                        <button id="actionsMenuDropdown1" data-dropdown-toggle="dropdownOrder1" type="button" className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                            <span className="sr-only"> Actions </span>
                                            <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="4" d="M6 12h.01m6 0h.01m5.99 0h.01"></path>
                                            </svg>
                                        </button>
                                        <div id="dropdownOrder1" className="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700" data-popper-placement="bottom">
                                            <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="actionsMenuDropdown1">
                                                <li>
                                                    <button type="button" data-modal-target="editReviewModal" data-modal-toggle="editReviewModal" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        <svg className="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                                        </svg>
                                                        <span>Edit review</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" data-modal-target="deleteReviewModal" data-modal-toggle="deleteReviewModal" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500">
                                                        Delete review
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
            </section >
        </div>
    )
}
export default page