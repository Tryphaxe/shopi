import TableList from '@/components/Tables/TableList'
import React from 'react'

export default function page() {
    return (
        <div className='py-5'>
            <div className="bg-white px-5 py-2 mb-4">
                <div
                    className="flex items-center justify-between"
                >
                    <h4 className="flex items-center gap-3 text-lg font-semibold text-gray-600 dark:text-gray-300">
                        <i className="fa-solid fa-coins"></i>
                        Rapports financiers
                    </h4>

                    <button type="submit" className="flex items-center gap-x-3 rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                        <i className="fa-solid fa-file-export"></i>
                        Exorter les données
                    </button>
                </div>

                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Full name</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Application for</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Email address</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-900">Salary expectation</dt>
                        <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
                    </div>
                </dl>
            </div>

            <h4
                className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300 gap-x-3 flex items-center bg-white px-5 py-2"
            >
                <i className="fa-solid fa-money-bill-1-wave"></i>
                Historique des paiements
            </h4>
            <TableList />

            <h4
                className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300 gap-x-3 flex items-center bg-white px-5 py-2"
            >
                <i className="fa-solid fa-money-bill-1-wave"></i>
                Historique des remboursements
            </h4>
            <TableList />
        </div>
    )
}