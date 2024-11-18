import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <section className="bg-center bg-cover bg-[url('/img/pool.jpg')] h-screen w-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <Link href="#" className="flex items-center mb-6 text-xl text-gray-900 dark:text-white">
                            <i className="fa-solid fa-gem fa-lg mr-2" style={{ color: "green" }}></i>
                            Shopping@babi
                        </Link>
                        <form className="space-y-2" action="#">
                            <div>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5" placeholder="Email" required="" />
                            </div>
                            <div>
                                <input type="password" name="password" id="password" placeholder="Mot de passe" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5" required="" />
                            </div>
                            <div className="text-center">
                                <Link href="#" className="text-sm font-medium text-orange-600 hover:underline dark:text-orange-500">Mot de passe oublié ?</Link>
                            </div>
                            <button type="submit" className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Connexion</button>

                        </form>
                        <div className="flex items-center justify-center my-5 border-b text-center">
                            <div
                                className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                Où connectez-vous avec
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <button
                                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-1 bg-orange-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                <div className="bg-white p-2 rounded-full">
                                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                                        <path
                                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                            fill="#4285f4" />
                                        <path
                                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                            fill="#34a853" />
                                        <path
                                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                            fill="#fbbc04" />
                                        <path
                                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                            fill="#ea4335" />
                                    </svg>
                                </div>
                                <span className="ml-4">
                                    Connectez-vous avec Google
                                </span>
                            </button>

                            <button
                                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-1 bg-orange-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-3">
                                <div className="bg-white p-1 px-3 rounded-full">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </div>
                                <span className="ml-4">
                                    Connectez-vous avec Facebook
                                </span>
                            </button>

                            <p className="mt-2 text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                Vous n'avez pas de compte? <Link href="/auth/signup" className="font-medium text-orange-600 hover:underline dark:text-orange-500">Inscrivez-vous !</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
