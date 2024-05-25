"use client"

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { MouseEvent } from "react";
import { toast } from "sonner";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function EmailUpdateInput() {

    const supabase = createClient();
    const [newEmail, setNewEmail] = useState('')


    const emailInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const emailInput = event.target.value;
        setNewEmail(emailInput);
    }

    // Update email Function
    async function updateEmail() {
        const { data, error } = await supabase.auth.updateUser({
            email: newEmail,
        })
        if (error) {
            console.log(`Error updating email: ${error}`)
        }
        return data;
    }

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            if (newEmail !== undefined || '') {
                updateEmail();
                setNewEmail('')
                toast.success('Email Updated successfully')
            } else {
                console.log('Could not Update email')
                // toast('Could not update user email. Please ensure you\'re using a valid address.')
            }
        } catch (error) {
            console.log('Updating email didnt work' + error)
        }
    }
    return (
        <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Update your email</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>Change the email address you want associated with your account.</p>
                </div>
                <form className="mt-5 sm:flex sm:items-center">
                    <div className="w-full sm:max-w-xs">
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={newEmail}
                            onChange={emailInputHandler}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="you@example.com"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={handleClick}
                        className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}
