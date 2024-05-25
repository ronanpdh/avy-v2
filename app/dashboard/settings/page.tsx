"use client"

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { MouseEvent } from "react";
// Tailwind Imports
import { Dialog, DialogPanel, Field, Label, Switch } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import {
    BellIcon,
    CreditCardIcon,
    CubeIcon,
    FingerPrintIcon,
    UserCircleIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { TrashIcon } from "@heroicons/react/24/outline"
import DeleteAlert from "@/components/settings/DeleteAlert";
import EmailUpdateInput from "@/components/settings/EmailUpdateInput";
import PasswordUpdate from "@/components/settings/PasswordUpdate";

const secondaryNavigation = [
    { name: 'General Settings', href: '#', icon: UserCircleIcon, current: true },
    //   { name: 'Security', href: '#', icon: FingerPrintIcon, current: false },
    //   { name: 'Notifications', href: '#', icon: BellIcon, current: false },
    //   { name: 'Plan', href: '#', icon: CubeIcon, current: false },
    //   { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
    //   { name: 'Team members', href: '#', icon: UsersIcon, current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export default function Settings() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [currentEmail, setCurrentEmail] = useState<string | undefined>('')

    // Set Dialogue state for open / close and pass to DeleteAlert
    const [open, setOpen] = useState(false)

    const supabase = createClient();

    // set and save user ID state
    const [userId, setUserId] = useState<string>('');

    // fetch userId from supabase auth
    async function getUserId() {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
            setUserId(user.id);
            setCurrentEmail(user.email)
            console.log(`User ID: ${userId}`)
        }
    }
    // On component load try and fetch getUserId function
    useEffect(() => {
        getUserId()
    }, [])


    return (
        <>
            <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
                <h1 className="sr-only">General Settings</h1>

                <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
                    <nav className="flex-none px-4 sm:px-6 lg:px-0">
                        <ul role="list" className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
                            {secondaryNavigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'bg-gray-50 text-indigo-600'
                                                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                            'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                'h-6 w-6 shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
                        <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                This information will not be displayed publicly.
                            </p>

                            <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">

                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Current Email address</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900">{currentEmail}</div>
                                    </dd>
                                </div>
                                <EmailUpdateInput />
                                <div className="pt-6 sm:flex">                                    
                                </div>
                                <PasswordUpdate />
                            </dl>
                        </div>


                        <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Delete Account</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </p>

                            <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                <button
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    className="inline-flex items-center gap-x-1.5 rounded-md hover:bg-red-600 px-3 py-2 mt-4 text-sm font-semibold text-white shadow-sm bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <TrashIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                                    Delete Account
                                </button>
                                {open && (
                                    <DeleteAlert userId={userId} open={open} setOpen={setOpen} />
                                )}
                            </dl>
                        </div>
                    </div>
                </main >
            </div >
        </>
    )
}
