import Link from 'next/link'
import React from 'react'

const Cardville = () => {
  return (
    <div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow overflow-hidden relative">
            <span className="flex items-center gap-1 text-lg font-medium px-2 p-1 bg-white text-gray-700 absolute left-0">
                Abidjan
            </span>
            <Link href="/listing/181124">
                <img className="rounded-t-lg w-full h-60" src="/img/hot2.jpg" alt="evenement picture" />
            </Link>
        </div>
    </div>
  )
}

export default Cardville
