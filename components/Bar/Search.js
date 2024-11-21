import React from "react";
import "@/styles/checkbox.css";

const Search = () => {
  return (
    <form action="" method="GET" className="flex gap-5 mt-3 items-center bg-white p-2 rounded-lg">
      <div className="relative  text-gray-500 focus-within:text-gray-900 ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
          <i className="fa-solid fa-location-dot text-orange-500"></i>
        </div>
        <input type="text" id="default-search" className="block w-full max-w-xs pr-4 pl-12 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed" placeholder="Position" />
      </div>

      <div id="date-range-picker" data-date-rangepicker className="flex items-center">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <i className="fa-solid fa-calendar-minus text-orange-500"></i>
          </div>
          <input id="datepicker-range-start" name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date début" />
        </div>
        <span className="mx-4 text-gray-500">-</span>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <i className="fa-solid fa-calendar-minus text-orange-500"></i>
          </div>
          <input id="datepicker-range-end" name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date fin" />
        </div>
      </div>

      <a href="#" className="bg-green-900 text-white flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:bg-green-800">
        <i className="fa-solid fa-search text-orange-400"></i>
        Rechercher
      </a>
    </form>
  );
};

export default Search;