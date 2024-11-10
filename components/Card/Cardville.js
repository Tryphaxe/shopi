import React from 'react'

const Cardville = () => {
  return (
    <div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow overflow-hidden relative">
            <span className="flex items-center gap-1 text-lg font-medium me-2 px-2 p-1 rounded-full bg-black bg-opacity-50 text-white absolute right-0 m-2">
                <p className='bg-orange-500 bg-opacity-55 text-white text-lg rounded-full p-1'>1253</p>Abidjan
            </span>
            <a href="#">
                <img className="rounded-t-lg w-full h-60" src="https://voogo.fr/wp-content/uploads/2021/11/251623919_425544605633703_4179423185897958966_n-1080x720.jpg" alt="evenement picture" />
            </a>
        </div>
    </div>
  )
}

export default Cardville
