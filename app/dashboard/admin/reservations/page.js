import TableList from '@/components/Tables/TableList'
import React from 'react'

export default function page() {
  return (
    <div className='py-5'>
        <div className='grid grid-cols-2 gap-3 mb-4'>
            <div className='flex items-center justify-between bg-white shadow-sm rounded-xl p-5'>
                <span className='flex items-center gap-x-3'><i className="fa-solid fa-thumbtack"></i>Réservation(s) en attente</span>
                <span className='text-3xl font-bold text-orange-600'>54</span>
            </div>
            <div className='flex items-center justify-between bg-white shadow-sm rounded-xl p-5'>
                <span className='flex items-center gap-x-3'><i className="fa-solid fa-thumbtack"></i>Total Réservation</span>
                <span className='text-3xl font-bold text-orange-600'>1.254</span>
            </div>
        </div>

        <div className='grid grid-cols-2 gap-3 mb-4'>
            <div className='flex items-center justify-between bg-white shadow-sm rounded-xl p-5'>
                <span className='flex items-center gap-x-3'><i className="fa-solid fa-thumbtack"></i>Réservation(s) en attente</span>
                <span className='text-3xl font-bold text-orange-600'>54</span>
            </div>
            <div className='flex items-center justify-between bg-white shadow-sm rounded-xl p-5'>
                <span className='flex items-center gap-x-3'><i className="fa-solid fa-thumbtack"></i>Total Réservation</span>
                <span className='text-3xl font-bold text-orange-600'>1.254</span>
            </div>
        </div>

        {/* SECTION TABLEAU */}
      <h4
        className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300 gap-x-3 flex items-center bg-white px-5 py-2"
      >
        <i className="fa-solid fa-thumbtack"></i>
        Réservation en attente...
      </h4>
      <TableList />

      <h4
        className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300 gap-x-3 flex items-center bg-white px-5 py-2"
      >
        <i className="fa-solid fa-clock-rotate-left"></i>
        Historique de validation
      </h4>
      <TableList />

    </div>
  )
}
