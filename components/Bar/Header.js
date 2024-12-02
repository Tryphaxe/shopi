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
    <header className="bg-white z-50 border-b shadow-sm">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Shopping@babi</span>
            <i className="fa-solid fa-gem fa-2xl" style={{ color: "green" }}></i>
            <span className="self-center ml-2 text-xl font-semibold whitespace-nowrap text-gray-900">Shopping@babi</span>
          </Link>
        </div>
        <div className="flex lg:hidden gap-3">
              <Link
                href="/shoppingcart"
                className={`text-md w-max px-3 py-1 font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/shoppingcart' ? 'text-orange-500 font-bold' : 'text-black'}`}
              >
                <i className='fa-solid fa-shopping-cart text-green-800'></i>
              </Link>
              <Link
                href="/auth/login"
                className={`text-md border w-max border-orange-600 rounded-full px-3 py-1 font-semibold leading-6 hover:text-orange-300 transition-all ${pathname === '/auth/login' ? 'text-orange-500 font-bold' : 'text-black'}`}
              >
                <i className='fa-solid fa-user text-orange-500'></i>
              </Link>
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
            <a href="/home" className="-m-1.5 p-1.5"
            onClick={() => setMobileMenuOpen(false)}
            >
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
              <div className="space-y-2 py-6 flex flex-col">
                <Link
                onClick={() => setMobileMenuOpen(false)}
                  href="/home"
                  className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/home' ? 'text-orange-500 font-bold' : 'text-black'}`}
                >
                  Acceuil
                </Link>
                <Link
                onClick={() => setMobileMenuOpen(false)}
                  href="/explorez"
                  className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/explorez' ? 'text-orange-500 font-bold' : 'text-black'}`}
                >
                  Explorez
                </Link>
                <Link
                onClick={() => setMobileMenuOpen(false)}
                  href="/boutique"
                  className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/boutique' ? 'text-orange-500 font-bold' : 'text-black'}`}
                >
                  Boutique
                </Link>
                <Link
                onClick={() => setMobileMenuOpen(false)}
                  href="/abonnements"
                  className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/abonnements' ? 'text-orange-500 font-bold' : 'text-black'}`}
                >
                  Abonnements
                </Link>
                <Link
                onClick={() => setMobileMenuOpen(false)}
                  href="/apropos"
                  className={`text-md font-semibold leading-6 hover:text-orange-500 transition-all ${pathname === '/apropos' ? 'text-orange-500 font-bold' : 'text-black'}`}
                >
                  A propos
                </Link>
              </div>
              <div className="py-6">
                <Link
                onClick={() => setMobileMenuOpen(false)}
                  href="#"
                  className="-mx-3 block w-max rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-orange-600 hover:text-white"
                >
                  Connectez-vous
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}