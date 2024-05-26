"use client"

import { useState } from 'react'
import { Dialog, Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
    ArrowPathIcon,
    CheckIcon,
    BoltIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'


import Image from "next/image";
import Link from "next/link";


const stats = [
    { label: 'Founded', value: '2024' },
    { label: 'Created By', value: 'Ronan Haughey' },
]


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function About() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="bg-white py-24 sm:py-32">
            <header className="absolute inset-x-0 top-0 z-50 bg-background">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">AVY</span>
                            <Image
                                className="h-8 w-auto"
                                src="https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/company%20assets/A.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55IGFzc2V0cy9BLnBuZyIsImlhdCI6MTcxNjYwODc3MCwiZXhwIjoxNzQ4MTQ0NzcwfQ.KkU2tz8-tP49W8YPW-bDkA39wlmogo5RkZl8RZ7ZsII&t=2024-05-25T03%3A46%3A10.314Z"
                                alt="AVY Logo"
                                width={32}
                                height={32}
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {/* {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </Link>
            ))} */}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link href="/login" className="text-sm font-semibold leading-6 text-white">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="/dashboard" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/company%20assets/A.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55IGFzc2V0cy9BLnBuZyIsImlhdCI6MTcxNjYwODc3MCwiZXhwIjoxNzQ4MTQ0NzcwfQ.KkU2tz8-tP49W8YPW-bDkA39wlmogo5RkZl8RZ7ZsII&t=2024-05-25T03%3A46%3A10.314Z"
                                    alt=""
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {/* {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))} */}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            <div className="mx-auto max-w-7xl px-6 mt-28 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-4">
                        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <Image
                                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                                src="https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/company%20assets/avydashboard.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55IGFzc2V0cy9hdnlkYXNoYm9hcmQud2VicCIsImlhdCI6MTcxNjY4NDAwNiwiZXhwIjoxNzQ4MjIwMDA2fQ.qdE31W_UYcv9Hd-uPXerfCoSBTO4kG_-nDKIgIkOMbk&t=2024-05-26T00%3A40%3A06.709Z"
                                alt="gradient"
                                fill={true}
                            />
                            <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
                            <div
                                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                                aria-hidden="true"
                            >
                                <div
                                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-80"
                                    style={{
                                        clipPath:
                                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                    }}
                                />
                            </div>
                            <figure className="relative isolate">
                                <svg
                                    viewBox="0 0 162 128"
                                    fill="none"
                                    aria-hidden="true"
                                    className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                                >

                                </svg>
                                <img src="" alt="" className="h-12 w-auto" />
                                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                                    <p>
                                    identifying patterns is a crucial first step towards self-awareness.
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 text-sm leading-6 text-gray-300">

                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">About AVY</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                On a mission to empower you
                            </h1>
                            <div className="max-w-xl">
                                <p className="mt-6">
                                Avy emerged from my own experiences with mental health journaling and therapy. At 27, I was diagnosed with depression and anxiety, after struggling for over a decade without understanding why I felt the way I did. 
                                This diagnosis was life-changing for me. As a developer, I began exploring ways to use software to help myself and others. 
                                </p>
                                <p className="mt-8">
                                A significant part of my journaling and therapy involved recognizing and understanding distorted thinking patterns. 
                                Knowing how our thoughts work, both positively and negatively, and identifying patterns is a crucial first step towards self-awareness. 
                                This inspired the creation of Avy.
                                </p>
                                <p className="mt-8">
                                Avy is a project I’ve been developing for some time. Despite its simplicity, it has provided me with valuable insights into my mental processes and has been a catalyst for learning more about mental health. 
                                I am committed to continually improving Avy to ensure it adds value to those who use it.
                                </p>
                            </div>
                        </div>
                        <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                            {stats.map((stat, statIdx) => (
                                <div key={statIdx}>
                                    <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className="mt-10 flex">
                            <a href="/login" className="text-base font-semibold leading-7 text-indigo-600">
                                Get started now <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
