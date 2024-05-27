"use client"

import { PopupButton } from '@typeform/embed-react'
import { BugAntIcon } from '@heroicons/react/24/outline'

export default function BugReport(): any {
    return (
        <PopupButton id="https://hno4jiszepb.typeform.com/to/qxscjQD8" style={{ fontSize: 20 }} className="my-button">
            <p
                className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                <BugAntIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Report Bug
            </p>
        </PopupButton>
    )
}