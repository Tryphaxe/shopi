import React from "react";
import { Carousel } from "flowbite-react";

export default function page() {
    return (
        <div className="py-5">
            <h4 className="mb-4 text-lg font-semibold text-green-600 gap-x-3 flex items-center bg-white px-5 py-2">
                <i className="fa-solid fa-gears"></i>
                Paramètres avancés
            </h4>

            <div className="min-w-0 mb-4 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="flex items-center gap-3 text-lg font-semibold text-gray-600 dark:text-gray-300">
                        <i className="fa-solid fa-coins"></i>
                        Logo
                    </h4>

                    <button
                        type="submit"
                        className="flex items-center gap-x-3 rounded-md bg-orange-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                        <i className="fa-solid fa-pen"></i>
                    </button>
                </div>
                <div className="w-full flex items-center justify-center">
                    <img
                        src="/img/pavicon.png"
                        width={100}
                        height={100}
                        className="bg-cover bg-center rounded-full border border-orange-100 shadow-md"
                    />
                </div>
            </div>

            <div className="min-w-0 mb-4 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="flex items-center gap-3 text-lg font-semibold text-gray-600 dark:text-gray-300">
                        <i className="fa-solid fa-coins"></i>
                        Description de l'établissement
                    </h4>

                    <button
                        type="submit"
                        className="flex items-center gap-x-3 rounded-md bg-orange-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                        <i className="fa-solid fa-pen"></i>
                    </button>
                </div>
                <span className="text-md text-black">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fuga, cum commodi a omnis numquam quod? Totam exercitationem
                    quos hic ipsam at qui cum numquam, sed amet ratione! Ratione,
                    nihil dolorum.
                </span>
            </div>

            <div className="min-w-0 mb-4 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="flex items-center gap-3 text-lg font-semibold text-gray-600 dark:text-gray-300">
                        <i className="fa-solid fa-coins"></i>
                        Images de l'établissement
                    </h4>

                    <button
                        type="submit"
                        className="flex items-center gap-x-3 rounded-md bg-orange-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                        <i className="fa-solid fa-pen"></i>
                    </button>
                </div>

                <span className="text-xs text-gray-500">
                    *Les images insérer ici feront office d'images de fond
                    sur votre page perçu par les clients
                </span>

                <div className="md:w-96 h-48 mx-auto my-5 flex items-center justify-center">
                    <Carousel slide={true} indicators={true}>
                        <img src="/img/avz.jpg" className="bg-cover bg-center w-full" />
                        <img src="/img/back.jpg" className="bg-cover bg-center w-full" />
                        <img src="/img/hot2.jpg" className="bg-cover bg-center w-full" />
                    </Carousel>
                </div>
            </div>

            <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="flex items-center gap-3 text-lg font-semibold text-gray-600 dark:text-gray-300">
                        <i className="fa-solid fa-coins"></i>
                        Configuration des heures d'ouverture et de fermeture
                    </h4>

                    <button
                        type="submit"
                        className="flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                        <i className="fa-solid fa-pen"></i>
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label
                            htmlFor="ho"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Heure d'ouverture
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="ho"
                                id="ho"
                                placeholder="23:59"
                                disabled
                                className="cursor-not-allowed block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="hf"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Heure de fermeture
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="hf"
                                id="hf"
                                placeholder="23:59"
                                disabled
                                className="cursor-not-allowed block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
