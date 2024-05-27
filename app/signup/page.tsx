import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../login/submit-button";
import Image from "next/image";

export default function SignUp({
    searchParams,
}: {
    searchParams: { message: string };
}) {
    const signUp = async (formData: FormData) => {
        "use server";

        const origin = headers().get("origin");
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const supabase = createClient();

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${origin}/auth/callback`,
            },
        });

        if (error) {
            console.log(error)
            return redirect("/signup?message=Couldn't sign up. Please check your email and make sure your password includes 8 characters, a symbol, number and uppercase letter.");
        }

        return redirect("/login?message=Check email to continue sign in process");
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image
                    className="mx-auto h-10 w-auto"
                    src="https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/company%20assets/avylogolg.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55IGFzc2V0cy9hdnlsb2dvbGcud2VicCIsImlhdCI6MTcxNjY1MDk1MCwiZXhwIjoxNzQ4MTg2OTUwfQ.1bKpQot4M_BKuQgBeM4ObTPGp1tZ7EBDn0drToZqz8g&t=2024-05-25T15%3A29%3A10.322Z"
                    alt="AVY Logo"
                    width={1000}
                    height={1000}
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Sign Up
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="submit" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <input
                                id="terms"
                                aria-describedby="terms-confirmation"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="terms" className="font-medium text-white">
                               Agree to <Link href="/terms-of-service" target="_blank"><span className="text-indigo-200 underline ">Terms of Service</span></Link>
                            </label>
                            <p id="terms-description" className="text-gray-500">
                                Please confirm you have read and agree with our terms of service. 
                            </p>
                        </div>
                    </div>

                    <div>
                        <SubmitButton
                            formAction={signUp}
                            className="border border-foreground/20 rounded-md px-4 py-2 text-white mb-2"
                            pendingText="Signing Up..."
                        >
                            Sign Up
                        </SubmitButton>
                        {searchParams?.message && (
                            <p className="mt-4 p-4 bg-foreground/10 text-red-200 text-center">
                                {searchParams.message}
                            </p>
                        )}
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <a href="/login" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    )
}
