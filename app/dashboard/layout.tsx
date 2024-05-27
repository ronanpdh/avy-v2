"use client"

import { Fragment } from 'react'
import { Disclosure, DisclosurePanel, Menu, Transition, DisclosureButton, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx';
import { useRouter } from 'next/router'
import JournalCmd from '@/components/journal/JournalCmd'
import Image from 'next/image'
import BugReport from '@/components/bugs/BugReport'

const navigation = [
    { name: 'Home', href: '/dashboard', current: true },
    { name: 'Journal', href: '/dashboard/journal', current: true },
    { name: 'Archive', href: '/dashboard/archive', current: false },
    { name: 'Stats', href: '/dashboard/stats', current: false },
    { name: 'Resources', href: '/dashboard/resources', current: false },
]

const userNavigation = [
    { name: 'Settings', href: '/dashboard/settings' },
    { name: 'Sign out', href: '/dashboard/logout' },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            <JournalCmd />
            <div className="h-full w-full">
                <div className="bg-gray-800 pb-32">
                    <Disclosure as="nav" className="bg-gray-800">
                        {({ open }) => (
                            <>
                                <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
                                    <div className="border-b border-gray-700">
                                        <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <Image
                                                        className="h-8 w-8"
                                                        src="https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/company%20assets/A.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55IGFzc2V0cy9BLnBuZyIsImlhdCI6MTcxNjYwODc3MCwiZXhwIjoxNzQ4MTQ0NzcwfQ.KkU2tz8-tP49W8YPW-bDkA39wlmogo5RkZl8RZ7ZsII&t=2024-05-25T03%3A46%3A10.314Z"
                                                        alt="AVY Logo"
                                                        width={32}
                                                        height={32}
                                                    />
                                                </div>
                                                <div className="hidden md:block">
                                                    <div className="ml-10 flex items-baseline space-x-4">
                                                        {navigation.map((item) => (
                                                            <>
                                                                <Link
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    aria-current={item.current ? 'page' : undefined}
                                                                    className={clsx(
                                                                        "text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg",
                                                                        {
                                                                            'bg-gray-900 text-white': pathname === item.href
                                                                        }
                                                                    )}
                                                                >
                                                                    <p className="rounded-md px-3 py-2 text-sm font-medium">{item.name}</p>
                                                                </Link>
                                                            </>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="ml-4 flex items-center md:ml-6">
                                                    <button
                                                        type="button"
                                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                    >
                                                        <span className="absolute -inset-1.5" />

                                                    </button>

                                                    {/* Profile dropdown */}
                                                    <Menu as="div" className="relative ml-3">
                                                        <div>
                                                            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                                <span className="absolute -inset-1.5" />
                                                                <span className="sr-only">Open user menu</span>
                                                                <Cog8ToothIcon className="h-6 w-6 rounded-full" />
                                                            </MenuButton>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                {userNavigation.map((item) => (
                                                                    <MenuItem key={item.name}>
                                                                        {({ active }) => (
                                                                            <a
                                                                                href={item.href}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-100' : '',
                                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                                )}
                                                                            >
                                                                                {item.name}
                                                                            </a>
                                                                        )}
                                                                    </MenuItem>
                                                                ))}
                                                            </MenuItems>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                            </div>
                                            <div className="-mr-2 flex md:hidden">
                                                {/* Mobile menu button */}
                                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-0.5" />
                                                    <span className="sr-only">Open main menu</span>
                                                    {open ? (
                                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </DisclosureButton>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <DisclosurePanel className="border-b border-gray-700 md:hidden">
                                    <div className="space-y-1 px-2 py-3 sm:px-3">
                                        {navigation.map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'block rounded-md px-3 py-2 text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </div>
                                    <div className="border-t border-gray-700 pb-3 pt-4">
                                        <div className="flex items-center px-5">
                                            <div className="flex-shrink-0">
                                                <Cog8ToothIcon className="h-6 w-6 rounded-full" />
                                            </div>
                                            <div className="ml-3">
                                                {/* <div className="text-base font-medium leading-none text-white">{userp.name}</div>
                                                <div className="text-sm font-medium leading-none text-gray-400">{userp.email}</div> */}
                                            </div>
                                            <button
                                                type="button"
                                                className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <span className="absolute -inset-1.5" />
                                            </button>
                                        </div>
                                        <div className="mt-3 space-y-1 px-2">
                                            {userNavigation.map((item) => (
                                                <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                                >
                                                    {item.name}
                                                </DisclosureButton>
                                            ))}
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </>
                        )}
                    </Disclosure>
                    <header className="py-10 w-full">
                        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">

                            <h1 className="text-3xl font-bold tracking-tight text-white">{ }</h1>
                            <BugReport />

                        </div>
                    </header>
                </div>

                <main className="-mt-32 w-full">
                    <div className="w-full mx-auto max-w-8xl px-4 pb-12 sm:px-6 lg:px-8">
                        <div className="rounded-xl bg-white  px-5 py-6 shadow sm:px-6 ">{children}</div>
                    </div>
                </main>
            </div>
        </>
    )
}

