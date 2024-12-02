import React from 'react'
import Carouseltexte from '../Carousel/Carouseltexte'

const Case = () => {
    return (
        <div className="w-5/6 rounded-lg overflow-hidden mx-auto my-3 shadow-lg bg-[url('/img/background.jpg')] bg-cover bg-center h-full">
            <div className="container px-5 py-10 md:py-10 md:px-32  mx-auto bg-black bg-opacity-50">
                <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white">Commencez maintenant</h1>
                <h1 className="text-lg md:text-3xl text-orange-400  font-semibold mb-8">Faites le Show dans tout Babi...</h1>
                <div className="">
                    <Carouseltexte />
                </div>
            </div>
        </div>

    )
}

export default Case
