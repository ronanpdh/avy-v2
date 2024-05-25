"use client"

import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { DocumentPlusIcon, FolderIcon, FolderPlusIcon, HashtagIcon, TagIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import JournalForm from './JournalForm'

const projects = [
    { id: 1, name: 'Workflow Inc. / Website Redesign', url: '#' },
    // More projects...
]
const recent = [projects[0]]
const quickActions = [
    { name: 'Go to archive...', icon: DocumentPlusIcon, shortcut: '', url: '/dashboard/archive' },
    { name: 'Go to stats...', icon: FolderPlusIcon, shortcut: '', url: '/dashboard/stats' },
    { name: 'Go to resources...', icon: HashtagIcon, shortcut: '', url: '/dashboard/resources' },
    { name: 'Settings', icon: TagIcon, shortcut: '', url: '/dashboard/settings' },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function JournalCmd() {
    const [query, setQuery] = useState('')
    const [open, setOpen] = useState(false)

    const filteredProjects =
        query === ''
            ? []
            : projects.filter((project) => {
                return project.name.toLowerCase().includes(query.toLowerCase())
            })

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <Transition show={open} afterLeave={() => setQuery('')} appear>
            <Dialog className="relative z-10" onClose={setOpen}>
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                </TransitionChild>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className="mx-auto max-w-4xl p-2 transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all">
                            <Combobox onChange={(item: any) => (window.location = item.url)}>
                                <div className="relative">
                                    <MagnifyingGlassIcon
                                        className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-900 text-opacity-40"
                                        aria-hidden="true"
                                    />
                                    <ComboboxInput
                                        autoFocus
                                        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 focus:ring-0 sm:text-sm"
                                        placeholder="Search..."
                                        onChange={(event) => setQuery(event.target.value)}
                                        onBlur={() => setQuery('')}
                                    />
                                </div>

                                {(query === '' || filteredProjects.length > 0) && (
                                    <ComboboxOptions
                                        static
                                        as="ul"
                                        className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto"
                                    >                                       
                                        {query === '' && (
                                            <li className="p-2">
                                                <h2 className="sr-only">Quick actions</h2>
                                                <ul className="text-sm text-gray-700">
                                                    {quickActions.map((action) => (
                                                        <ComboboxOption
                                                            as="li"
                                                            key={action.shortcut}
                                                            value={action}
                                                            className={({ focus }) =>
                                                                classNames(
                                                                    'flex cursor-default select-none items-center rounded-md px-3 py-2',
                                                                    focus && 'bg-gray-900 bg-opacity-5 text-gray-900'
                                                                )
                                                            }
                                                        >
                                                            {({ focus }) => (
                                                                <>
                                                                    <action.icon
                                                                        className={classNames(
                                                                            'h-6 w-6 flex-none text-gray-900 text-opacity-40',
                                                                            focus && 'text-opacity-100'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                    <span className="ml-3 flex-auto truncate">{action.name}</span>
                                                                    <span className="ml-3 flex-none text-xs font-semibold text-gray-500">
                                                                        <kbd className="font-sans">⌘</kbd>
                                                                        <kbd className="font-sans">{action.shortcut}</kbd>
                                                                    </span>
                                                                </>
                                                            )}
                                                        </ComboboxOption>
                                                    ))}
                                                </ul>
                                            </li>
                                        )}
                                    </ComboboxOptions>
                                )}

                                {query !== '' && filteredProjects.length === 0 && (
                                    <div className="px-6 py-14 text-center sm:px-14">
                                        <FolderIcon className="mx-auto h-6 w-6 text-gray-900 text-opacity-40" aria-hidden="true" />
                                        <p className="mt-4 text-sm text-gray-900">
                                            We couldn't find any projects with that term. Please try again.
                                        </p>
                                    </div>
                                )}
                            </Combobox>
                            <JournalForm />
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    )
}
