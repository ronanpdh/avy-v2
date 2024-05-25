"use client"

import JournalForm from "./JournalForm";
import PromptDisplay from './PromptDisplay'

export default function Journal() {

    return (
        <>
            <div className="mb-4">
                <PromptDisplay />
            </div>
            <JournalForm />
        </>
    )
}