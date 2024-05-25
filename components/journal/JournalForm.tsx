"use client"

import { useEffect, useState } from "react";
import { useAntrhopic } from "@/hooks/useAnthropic";
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Listbox, Transition } from '@headlessui/react'
import { toast } from "sonner";

// zod formSchema
const formSchema = z.object({
    title: z.string().min(1).max(50, {
        message: "Title must be atlest 1 character.",
    }),
    entry: z.string().min(20, {
        message: "Entry must be atleast 20 characters, if you're unsure what to write, check out our prompts",
    }),
})

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

interface IFormInput {
    title: string
    entry: string
}


// Define form for journal input
export default function JournalForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            entry: "",
        },
    })


    const { reset, register, formState, formState: { isSubmitSuccessful, errors } } = form;
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            // submit form values to antrhopic api call 
            useAntrhopic(values.entry, values.title);
            setSubmissionStatus('success');
            toast.success("Entry Saved Succesfully");
            setTimeout(() => {
                setSubmissionStatus('idle');
            }, 8000)

        } catch (error) {
            console.error("Submission error", error);
            setSubmissionStatus('error');
            toast.error("Ooops! Somethings gone wrong here, try again shortly.")
            setTimeout(() => {
                setSubmissionStatus('idle');
            }, 8000)
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="relative" >
            <div className="overflow-hidden rounded-lg shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                <label htmlFor="title" className="sr-only">Title</label>
                <input
                    type="text"
                    id="title"
                    className="block w-full border-0 pt-2.5 text-lg font-medium text-black placeholder:text-gray-400 focus:ring-0 bg-indigo-50"
                    placeholder="Title"
                    {...register("title")}
                />
                {errors.title && toast.error('Please include a title')}

                <label htmlFor="entry" className="sr-only">Entry</label>
                <textarea
                    id="entry"
                    rows={16}
                    className="block w-full resize-none border-0 py-0 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-indigo-50"
                    placeholder="Write your entry..."
                    {...register("entry")}
                />
                {errors.entry && toast.error('Your entry must be more than 20 characters')}
            </div>

            <div className="flex items-center justify-between border-gray-200 py-2 sm:px-3">
                <div className="flex-shrink-0">
                    <button
                        type="submit"
                        className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </div>
            {/* {submissionStatus === 'success' && <p className="text-green-600">Entry saved successfully!</p>}
            {submissionStatus === 'error' && <p className="text-red-600">Submission failed. Please try again.</p>} */}
        </form>
    )
}

