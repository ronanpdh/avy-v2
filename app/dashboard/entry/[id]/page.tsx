"use server"

// import { useState, useEffect } from 'react';
import { createClient } from "@/utils/supabase/server";
// Component Import
import { Fragment } from 'react'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    Transition,
    TransitionChild,
} from '@headlessui/react'
import { ChevronRightIcon, HomeIcon, Bars3Icon, BellIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { DeleteButton } from "@/components/EntryDeleteButton";


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

// Set types for entry data 
interface DistortionTypes {
    count: number,
    examples: string,
    distortion: string
}

interface EntryData {
    id: number,
    title: string,
    body: string,
    distortion_types: DistortionTypes[] | null,
    sentiment: string,
    created_at: string,
    distortion_count: number
}

async function getEntryData(id: number): Promise<EntryData | undefined> {

    const supabase = createClient();

    try {
        let { data: entries, error } = await supabase
            .from('entries')
            .select('*')
        if (entries) {
            let entryData = entries.find(entry => entry.id == id)
            // return entryData
            console.log(entryData)
            return entryData
        }
    } catch (error) {
        console.log(`Entry data fetch failed ${error}`)
    }
}



export default async function Entry({ params }: { params: { id: number } }) {

    const supabase = createClient();
    const data = await getEntryData(params.id)

    // Call DB to get entry data id's to create page params
    async function generateStaticParams() {
        let { data: entries, error } = await supabase
            .from('entries')
            .select('id')

        return entries?.map((entry) => ({
            id: entry.id
        }))

    }
    generateStaticParams();

    return (

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 h-full">
            {data ? (
                <><nav className="flex" aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-4">
                        <li>
                            <div>
                                <a href="#" className="text-gray-400 hover:text-gray-500">
                                    <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                    <span className="sr-only">Home</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <a
                                    href="/dashboard/archive"
                                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                    aria-current={data.title ? 'page' : undefined}
                                >
                                    Archive
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <a
                                    href="/"
                                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                    aria-current={data.title ? 'page' : undefined}
                                >
                                    {data.title}
                                </a>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="grid grid-cols-1 items-start gap-4 mt-6 lg:grid-cols-3 lg:gap-8">
                        {/* Left column */}
                        <div className="grid grid-cols-1 gap-4 lg:col-span-2 h-full bg-white/20">
                            <section aria-labelledby="section-1-title">
                                <h2 className="sr-only text-gray-400" id="section-1-title">
                                    
                                </h2>
                                <div className="overflow-hidden rounded-lg bg-white/20 backdrop-blur-sm shadow">
                                    <div className="p-6 bg-slate-800">
                                        <h3 className="mb-2">Distortions and Sentiment</h3>
                                        {data?.sentiment === 'Negative' ? (
                                            <span className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">
                                                Negative
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                                                Positive
                                            </span>
                                        )}
                                    </div>
                                    {Array.isArray(data.distortion_types) ?
                                        data.distortion_types?.map(distortion => <div className="overflow-hidden bg-white/60 shadow sm:rounded-md">
                                            <ul role="list" className="divide-y divide-gray-200">
                                                <li key={1} className="px-4 py-4 sm:px-6">
                                                    <h4 className="mt-2 text-gray-600"><span className="font-semibold">Distortion Type: </span>{distortion.distortion}</h4>
                                                    <p className="mt-2 text-gray-600"><span className="font-semibold">Count: </span>{distortion.count}</p>
                                                    <p className="mt-2 text-gray-600 font-italic"><span className="font-semibold">Examples: </span> {distortion.examples}</p>
                                                </li>

                                            </ul>
                                        </div>
                                        ) : (
                                            <h4 className="p-4 mt-2 text-gray-600 font-semibold">No Distortions detected</h4>
                                        )}

                                </div>``
                            </section>
                        </div>

                        {/* Right column */}
                        <div className="grid grid-cols-1 gap-4 h-full bg-white/65">
                            <section aria-labelledby="section-2-title">
                                <h2 className="sr-only" id="section-2-title">
                                    Journal Entry
                                </h2>
                                <div className="overflow-hidden rounded-lg shadow">
                                    <div className="p-6 text-gray-600 ">
                                        <h2 className="font-semibold mb-2">{data.title}</h2>
                                        <p>{data.body}</p>
                                    </div>
                                </div>
                                <DeleteButton entryId={params.id} children />
                            </section>
                        </div>
                    </div></>

            ) : (
                undefined
            )}
        </div >

    )
}