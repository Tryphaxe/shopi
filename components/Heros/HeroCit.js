import React from 'react'

function HeroCit() {
    return (
        <section className="py-24 relative w-5/6 mx-auto">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Notre mission</h2>
                            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Chez Shopping@babi, nous croyons que chaque voyage mérite d’être exceptionnel. Notre mission est de vous fournir un annuaire complet et fiable des sites touristiques et des activités de loisirs, afin que vous puissiez explorer le monde avec confiance et enthousiasme. Nous nous engageons à vous offrir des informations précises, des recommandations personnalisées et des conseils pratiques pour rendre vos voyages plus agréables.</p>
                        </div>
                        {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                            <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                        </button> */}
                    </div>
                    <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1717751272.png" alt="about Us image" />
                </div>
            </div>
        </section>
    )
}

export default HeroCit
