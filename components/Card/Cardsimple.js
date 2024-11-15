import React from 'react'

const Cardsimple = () => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow overflow-hidden relative">
            <span className="bg-blue-100 text-blue-800 flex items-center gap-2 text-md font-medium me-2 px-3 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-300 absolute right-0 m-2"><i className='fa-solid fa-hotel text-yellow-300'></i>Hôtel</span>
            <a href="#">
                <img className="rounded-t-lg w-full h-60" src="https://voogo.fr/wp-content/uploads/2021/11/251623919_425544605633703_4179423185897958966_n-1080x720.jpg" alt="evenement picture" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Nakama Motel</h5>
                </a>
                <p className="flex items-center gap-2 mb-3 font-normal text-gray-700 dark:text-gray-400"><i className='fa-solid fa-location-dot text-yellow-300'></i>Avenue Henri Konan Bédié 502</p>
            </div>
        </div>

    )
}

export default Cardsimple
