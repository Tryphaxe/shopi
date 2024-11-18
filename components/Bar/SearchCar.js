"use client"

import React from "react";
import "@/styles/checkbox.css";
import { Datepicker } from "flowbite-react";

const SearchCar = () => {
  return (
    <form action="" method="GET" className="flex gap-5 mt-3 items-center bg-white p-2 rounded-lg">
      <div className="relative  text-gray-500 focus-within:text-gray-900 ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
          <i class="fa-solid fa-bowl-rice text-orange-500"></i>
        </div>
        <input type="text" id="default-search" className="block w-full max-w-xs pr-4 pl-12 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed" placeholder="Restaurant" />
      </div>
      <Datepicker />
      <div className="relative  text-gray-500 focus-within:text-gray-900 ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
          <i class="fa-solid fa-user-group text-orange-500"></i>
        </div>
        <input type="text" id="default-search" className="block w-full max-w-xs pr-4 pl-12 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed" placeholder="Personne(s)" />
      </div>
      <a href="#" className="bg-green-900 text-white flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:bg-red-100">
        <i className="fa-solid fa-search text-orange-400"></i>
        Rechercher
      </a>
    </form>
  );
};

export default SearchCar;