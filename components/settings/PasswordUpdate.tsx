"use client"

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { MouseEvent } from "react";
import { toast } from "sonner";
import { redirect } from "next/navigation";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function PasswordUpdate() {

    const supabase = createClient();
    const [newPassword, setNewPassword] = useState('')

    const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const passwordInput = event.target.value;
        setNewPassword(passwordInput);
    }

    // Update Password Function
    async function updatePassword() {
        const { data, error } = await supabase.auth.updateUser({
            password: newPassword,
        })
        if (error) {
            console.log(`Error updating password: ${error}`)
            toast.error(`Error updating password: ${error}`)
        } else if (!error) {
            toast.success('Password Updated successfully');
        }

        return redirect("/login");
    }

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            if (newPassword && newPassword.trim() !== '') {
                updatePassword()
                    .then(() => {
                        setNewPassword('');
                    })
                    .catch((error) => {
                        console.log('Updating Password didn\'t work', error);
                        toast.error('Could not update password.');
                    });
            } else {
                console.log('Password is empty');
                toast.error('Password cannot be empty.');
            }
        } catch (error) {
            console.log('Updating Password didn\'t work', error);
            toast.error('Could not update password.');
        }
    }
    return (
        <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Update your Password</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>Change the password you want associated with your account.</p>
                </div>
                <form className="mt-5 sm:flex sm:items-center">
                    <div className="w-full sm:max-w-xs">
                        <label htmlFor="email" className="sr-only">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            minLength={8}
                            value={newPassword}
                            onChange={passwordInputHandler}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Password123!@"
                        ></input>
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
