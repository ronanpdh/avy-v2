"use client"

import { useState, useEffect } from 'react';
// Supabase Client Import
import { createClient } from '@/utils/supabase/client';

import { useRouter } from 'next/navigation';;

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Feed() {

    const supabase = createClient();
    const router = useRouter();

    // data types 
    interface ArchiveData {
        id: number,
        title: string,
        sentiment: string,
        created_at: string,
        distortion_count: number
    }

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [archiveData, setArchiveData] = useState<ArchiveData[] | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let { data: entries, error } = await supabase
                    .from('entries')
                    .select('id, title, sentiment,created_at,distortion_count')
                    .order('created_at', { ascending: false });
                if (entries) {
                    setArchiveData(entries ? entries : undefined);
                }
            } catch (error) {
                console.log(`Error fetching data ${error}`);
            }
        }

        fetchData();

    }, [])
    return (

        <div className="px-6 sm:px-6 lg:px-8 bg-foreground bg- rounded-lg mb-2 max-h-max">
            <div className="p-6 sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Title</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, title, email and role.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    {/* <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add entry
                    </button> */}
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full border-separate border-spacing-0">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                                    >
                                        Sentiment
                                    </th>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                    >
                                        Distortion Count
                                    </th>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                                    >
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {archiveData?.map((entry) => (
                                    <tr key={entry.id}
                                        onClick={() => router.push(`/dashboard/entry/${entry.id}`)}
                                        className="cursor-pointer"
                                    >
                                        <td
                                            className={classNames(
                                                entry.id !== archiveData.length - 1 ? 'border-b border-gray-200' : '',
                                                'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                                            )}
                                        >
                                            {entry.title}
                                        </td>
                                        <td
                                            className={classNames(
                                                entry.id !== archiveData.length - 1 ? 'border-b border-gray-200' : '',
                                                'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                                            )}
                                        >
                                            {entry.created_at.split("T")[0]}
                                        </td>
                                        <td
                                            className={classNames(
                                                entry.id !== archiveData.length - 1 ? 'border-b border-gray-200' : '',
                                                'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'
                                            )}
                                        >
                                            {entry.sentiment}
                                        </td>
                                        <td
                                            className={classNames(
                                                entry.id !== archiveData.length - 1 ? 'border-b border-gray-200' : '',
                                                'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                                            )}
                                        >
                                            {entry.distortion_count ? entry.distortion_count : 0}
                                        </td>
                                        <td
                                            className={classNames(
                                                entry.id !== archiveData.length - 1 ? 'border-b border-gray-200' : '',
                                                'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                                            )}
                                        >
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit<span className="sr-only">, { }</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
