import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/app/login/submit-button"
import Image from "next/image";


export default function ForgottenPassword() {
    const passwordReset = async (formData: FormData) => {
        "use server";

        const email = formData.get("email") as string;
        const supabase = createClient();

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'https://avy.xyz/dashboard/password-reset',
        })

        if (error) {
            return redirect("/login?message=Could not authenticate user");
        }

        return redirect("/dashboard");
    };

    return (
        <>
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
                        Reset your password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
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
                            <SubmitButton
                                formAction={passwordReset}
                                className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
                                pendingText="Sending email..."
                            >
                                Sign In
                            </SubmitButton>                            
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-400">
                        Not a member?{' '}
                        <Link href="/signup" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
                            Sign Up Now
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
