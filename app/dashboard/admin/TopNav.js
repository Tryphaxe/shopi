'use client';

import { usePathname } from 'next/navigation';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Accueil', href: '/dashboard/admin/home' },
    { name: 'Réservations', href: '/dashboard/admin/reservations' },
    { name: 'Services', href: '/dashboard/admin/services' },
    { name: 'Paiement', href: '/dashboard/admin/payements' },
    { name: 'Avis', href: '/dashboard/admin/avis' },
    { name: 'Paramètres', href: '/dashboard/admin/settings' },
    { name: 'Support', href: '/dashboard/admin/supports' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function TopNav() {
    const pathname = usePathname(); // Récupère le chemin actuel de l'URL

    return (
        <Disclosure as="nav" className="bg-transparent my-5">
            <div className="relative flex items-center justify-between">
                {/* Menu mobile */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                    </DisclosureButton>
                </div>
                {/* Menu desktop */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden sm:block">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        pathname === item.href
                                            ? 'border-b-2 border-orange-600 text-orange-600'
                                            : 'text-gray-500 hover:border-gray-700 hover:text-orange-500',
                                        'px-3 py-2 text-sm font-medium transition-all duration-300'
                                    )}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <a href="/dashboard/admin/notifications"
                        className="relative rounded-full bg-orange-50 p-1 text-orange-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <BellIcon aria-hidden="true" className="size-6" />
                    </a>
                </div>
            </div>

            {/* Menu mobile */}
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                                pathname === item.href
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}