"use client"

import { createClient } from "@/utils/supabase/client"
import { useState, type ComponentPropsWithoutRef, type MouseEvent } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import { useRouter } from "next/router";

interface UserDeleteButtonProps {
    userId: string;
}

export function UserDeleteButton({ userId, ...props }: UserDeleteButtonProps) {
    const supabase = createClient();
    const router = useRouter();

    // Delete function
    async function deleteUser(userId: string) {
        //  globally log user out - need to create deletion function
        try {
            if (!userId) throw new Error('No User')
                await supabase.functions.invoke('user-self-deletion')
            toast.info('Account deleted')
        } catch (error) {
            toast.error(`Could not delete account, please contact support@avy.xyz ${error}`)
        }
        
        // const { error } = await supabase.auth.signOut({ scope: 'local' });       
    }

    const handleDelete = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const { error } = await supabase.auth.signOut({ scope: 'local' });
        if (error) {
            console.log(`Error signing user out ${error}`);
        }
        router.push('/');
        toast.info('Account deleted')
        deleteUser(userId);
    }

    return (
        <>
            <button
                type="button"
                onClick={handleDelete}
                className="inline-flex items-center gap-x-1.5 rounded-md hover:bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                <TrashIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                Delete Account
            </button>
        </>
    )
}