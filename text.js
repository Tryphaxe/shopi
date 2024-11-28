/*

Les pages qui restent :
DETAILS ACTIVITES  /
DETAILS PRODUITS  /
PAGE PAIEMENT ABONNEMENT
RECAP ACHAT
LOGIN  /
SIGNUP  /
---
TOUS LES DASHBOARD

CODE POUR AFFICHER UN SUSPENSE
<Header />
    <Suspense fallback={<Loading />}>{children}</Suspense>
<Footer />

CHIC CODE
<button type="button" className="inline-flex w-full items-center justify-center rounded-lg bg-orange-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                            <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                                            </svg>
                                            Add to cart
                                        </button>
<button data-tooltip-target="favourites-tooltip-1" type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                                            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"></path>
                                            </svg>
                                        </button>

*/

"use client";

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname();

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Shopping@babi</span>
                        <i className="fa-solid fa-gem fa-2xl" style={{ color: "green" }}></i>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-10 lg:items-center">
                    <Link
                        href="/home"
                        className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/home' ? 'text-orange-500 font-bold' : 'text-black'}`}
                    >
                        Acceuil
                    </Link>
                    <Link
                        href="/explorez"
                        className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/explorez' ? 'text-orange-500 font-bold' : 'text-black'}`}
                    >
                        Explorez
                    </Link>
                    <Link
                        href="/boutique"
                        className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/boutique' ? 'text-orange-500 font-bold' : 'text-black'}`}
                    >
                        Boutique
                    </Link>
                    <Link
                        href="/abonnements"
                        className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/abonnements' ? 'text-orange-500 font-bold' : 'text-black'}`}
                    >
                        Abonnements
                    </Link>
                    <Link
                        href="/apropos"
                        className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/apropos' ? 'text-orange-500 font-bold' : 'text-black'}`}
                    >
                        A propos
                    </Link>
                    <Link
                        href="/shoppingcart"
                        className={`text-md border border-gray-400 rounded-full px-4 py-1 font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/apropos' ? 'text-orange-500 font-bold' : 'text-black'}`}
                    >
                        <i className="fa-solid fa-cart-shopping mr-3 text-orange-500"></i>
                        Panier
                    </Link>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href="/auth/login"
                        className="text-md font-semibold leading-6 text-black hover:text-orange-500 transition-all"
                    >
                        Connectez-vous <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Shopping@babi</span>
                            <i className="fa-solid fa-gem fa-2xl" style={{ color: "green" }}></i>
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href="/home"
                                    className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/home' ? 'text-orange-500 font-bold' : 'text-black'}`}
                                >
                                    Acceuil
                                </Link>
                                <Link
                                    href="/explorez"
                                    className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/explorez' ? 'text-orange-500 font-bold' : 'text-black'}`}
                                >
                                    Explorez
                                </Link>
                                <Link
                                    href="/boutique"
                                    className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/boutique' ? 'text-orange-500 font-bold' : 'text-black'}`}
                                >
                                    Boutique
                                </Link>
                                <Link
                                    href="/abonnements"
                                    className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/abonnements' ? 'text-orange-500 font-bold' : 'text-black'}`}
                                >
                                    Abonnements
                                </Link>
                                <Link
                                    href="/apropos"
                                    className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/apropos' ? 'text-orange-500 font-bold' : 'text-black'}`}
                                >
                                    A propos
                                </Link>
                                <Link
                                    href="/shoppingcart"
                                    className={`text-md border border-black rounded-full px-3 py-1 font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/apropos' ? 'text-orange-500 font-bold' : 'text-black'}`}
                                >
                                    Panier
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-orange-600"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
