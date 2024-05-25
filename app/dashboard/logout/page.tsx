"use client"

import AuthButton from "@/components/AuthButton"
import { useEffect } from "react"

import { createClient } from "@/utils/supabase/client"
import { create } from "domain"
import { useRouter } from 'next/navigation'
import { toast } from "sonner"


export default async function Logout() {

    const supabase = createClient(); 
    const router = useRouter(); 

    useEffect( () => {
        const logout = async () => {
            let { error } = await supabase.auth.signOut()
            router.push('/')
            toast.info('Sign out succesfull, see you soon :)')
            if(error) {
                console.error(error)
            }
        }
        
        logout(); 
    })
}