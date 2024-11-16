"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky h-[13vh] top-0 w-full bg-white shadow-md z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5 flex items-center gap-3">
            <span className="sr-only">Shopping@babi</span>
            <i className="fa-solid fa-gem fa-2xl" style={{ color: "green" }}></i>
            <span className="text-orange-600 text-lg">Shopping@babi</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className={`text-md font-semibold leading-6 hover:text-orange-400 transition-all ${ pathname === '/' ? 'text-orange-400 font-bold' : 'text-black' }`}
          >
            Acceuil
          </Link>
          <Link
            href="/explorez"
            className={`text-md font-semibold leading-6 hover:text-orange-400 transition-all ${ pathname === '/explorez' ? 'text-orange-400 font-bold' : 'text-black' }`}
          >
            Explorez
          </Link>
          <Link
            href="/boutique"
            className={`text-md font-semibold leading-6 hover:text-orange-400 transition-all ${ pathname === '/boutique' ? 'text-orange-400 font-bold' : 'text-black' }`}
          >
            Boutique
          </Link>
          <Link
            href="/abonnements"
            className={`text-md font-semibold leading-6 hover:text-orange-400 transition-all ${ pathname === '/abonnements' ? 'text-orange-400 font-bold' : 'text-black' }`}
          >
            Abonnements
          </Link>
          <Link
            href="/apropos"
            className={`text-md font-semibold leading-6 hover:text-orange-400 transition-all ${ pathname === '/apropos' ? 'text-orange-400 font-bold' : 'text-black' }`}
          >
            A propos
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="text-md font-semibold leading-6 text-black hover:text-orange-400 transition-all"
          >
            Connectez-vous <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    <span>Merci</span>
                  </DisclosurePanel>
                </Disclosure> */}
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:text-orange-400 transition-all"
                >
                  Acceuil
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:text-orange-400 transition-all"
                >
                  Explorez
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:text-orange-400 transition-all"
                >
                  Boutique
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:text-orange-400 transition-all"
                >
                  Abonnements
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:text-orange-400 transition-all"
                >
                  A propos
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
  );
}
