import React from "react";
import "@/styles/checkbox.css";

const Search = () => {
  return (
      <form action="" method="GET" className="flex gap-5 mt-3 items-center bg-white p-2 rounded-lg">
        <div className=" border-gray-200 border rounded-lg">
          <div className="flex gap-3">
            <input type="checkbox" className="hidden" name="" id="option1" />
            <label
              htmlFor="option1"
              className="flex justify-center items-center cursor-pointer
              bg-white border-solid border-white rounded-lg p-3 transition-all gap-1"
            >
              <i className="fa-solid fa-person-swimming fa-xl" style={{color: "orange"}}></i>
              Piscine
            </label>
            <input type="checkbox" className="hidden" name="" id="option2" />
            <label
              htmlFor="option2"
              className="flex gap-1 justify-center items-center cursor-pointer  bg-white border-solid border-white rounded-lg p-3 transition-all"
            >
              <i className="fa-solid fa-house-signal fa-xl" style={{color: "orange"}}></i>
              Wifi
            </label>
            <input type="checkbox" className="hidden" name="" id="option3" />
            <label
              htmlFor="option3"
              className="flex gap-1 justify-center items-center cursor-pointer  bg-white border-solid border-white rounded-lg p-3 transition-all"
            >
              <i className="fa-solid fa-wind fa-xl" style={{color: "orange"}}></i>
              Clim
            </label>
            <input type="checkbox" className="hidden" name="" id="option4" />
            <label
              htmlFor="option4"
              className="flex gap-1 justify-center items-center cursor-pointer  bg-white border-solid border-white rounded-lg p-3 transition-all"
            >
              <i className="fa-solid fa-utensils fa-xl" style={{color: "orange"}}></i>
              Restau
            </label>
            <input type="checkbox" className="hidden" name="" id="option5" />
            <label
              htmlFor="option5"
              className="flex gap-1 justify-center items-center cursor-pointer  bg-white border-solid border-white rounded-lg p-3 transition-all"
            >
              <i className="fa-solid fa-cookie-bite fa-xl" style={{color: "orange"}}></i>
              Ptit dej
            </label>
          </div>
        </div>
        <div className="search border-gray-200 border rounded-lg">
          <div className="bg-white px-3 py-1 rounded-lg gap-2 flex items-center">
            <i className="fa-solid fa-location-dot" style={{color: "gray"}}></i>
            <input type="text" className="outline-none border-none w-100" placeholder="Position:  Exemple (Abidjan)" />
          </div>
        </div>
        <a href="#" className="bg-red-200 flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:bg-red-100">
          <i className="fa-solid fa-search"></i>
          Rechercher
        </a>
      </form>
  );
};

export default Search;