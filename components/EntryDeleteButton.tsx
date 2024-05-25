"use client"

import { createClient } from "@/utils/supabase/client"
import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import { useRouter } from "next/navigation";

interface DeleteButtonProps extends Omit<ComponentPropsWithoutRef<"button">, 'onClick'> {
    entryId?: number;
  }

export function DeleteButton({ children, entryId, ...props }: DeleteButtonProps) {

    const supabase = createClient();
    const router = useRouter(); 

    async function deleteEntry(entryId: number) {
        const { error } = await supabase
            .from('entries')
            .delete()
            .eq('id', entryId)
        if (error) console.error(`Could not delete row entry ${error}`);
        // redirect back to archive on delete
        router.push('/dashboard/archive'); 
    }

    const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (entryId !== undefined) {
            deleteEntry(entryId);
        } else {
            console.log(`entryId is undefinded`);
        }
    }

    return (
        <button type="submit" onClick={handleDelete}  {...props} className="inline-flex items-center gap-x-1.5 rounded-md hover:bg-red-600 px-3 py-2 mt-4 text-sm font-semibold text-white shadow-sm bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {children}
            Delete
        </button>
    )
}   