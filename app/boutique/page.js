import React from 'react'
import Filter from '@/components/Bar/Filter'
import Cardprod from '@/components/Card/Cardprod'
import Cardproduct from '@/components/Card/Cardproduct'

function page() {
  return (
    <div className="flex">
      <div className='w-1/5 px-5 py-3 bg-gray-50'>
        <Filter />
      </div>
      <div className='w-4/5 px-5 py-4 bg-white'>
        <div className='w-full h-full'>
          <section className="py-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-manrope font-bold text-4xl text-black mb-8">New Arrivals</h2>
              <div className="grid grid-cols-4 sm:grid-cols-4 xl:grid-cols-4 gap-8">
                <Cardproduct />
                <Cardproduct />
                <Cardproduct />
                <Cardproduct />
                <Cardproduct />
                <Cardproduct />
              </div>
            </div>
          </section>

          <section className="py-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-manrope font-bold text-4xl text-black mb-8">New Arrivals</h2>
              <div className="grid grid-cols-4 sm:grid-cols-4 xl:grid-cols-4 gap-8">
                <Cardproduct />
                <Cardproduct />
                <Cardproduct />
                <Cardproduct />
              </div>
            </div>
          </section>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope font-bold text-3xl min-[400px]:text-4xl text-black mb-8 max-lg:text-center">Available Products</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Cardprod />
              <Cardprod />
              <Cardprod />
              <Cardprod />
              <Cardprod />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default page
