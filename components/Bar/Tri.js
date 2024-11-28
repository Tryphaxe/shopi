import React from 'react'

const Tri = () => {
    return (
        <div className="w-full text-xs border-b px-12 pb-2">
            <div className='font-bold my-2 border-b'>Showing 267 results</div>
            <div className="grid grid-cols-2">
                <div className="flex items-center justify-end gap-5 md:justify-start lg:gap-10">
                    <div className="flex items-center gap-2">
                        <span className="">Map View</span>
                        <div className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" className="peer sr-only" />
                            <div className="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#11E469] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-transparent">
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="">Verified only</span>
                        <div className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" className="peer sr-only" />
                            <div className="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#11E469] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-transparent"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-5 md:justify-start">
                    <button type="button" className="bg-transparent p-2 md:px-5 rounded-md border border-gray-300">
                        <div className="flex items-center gap-1">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7h-9"></path>
                                <path d="M14 17H5"></path>
                                <circle cx="17" cy="17" r="3"></circle>
                                <circle cx="7" cy="7" r="3"></circle>
                            </svg>
                            <span>Filter</span>
                        </div>
                    </button>
                    <button type="button" className="bg-transparent p-2 md:px-5 rounded-md border border-gray-300">
                        <div className="flex items-center gap-1">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 6l7 0"></path>
                                <path d="M4 12l7 0"></path>
                                <path d="M4 18l9 0"></path>
                                <path d="M15 9l3 -3l3 3"></path>
                                <path d="M18 6l0 12"></path>
                            </svg>
                            <span>Sort by</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tri
