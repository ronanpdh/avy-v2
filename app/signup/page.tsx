import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../login/submit-button";

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
            return redirect("/login?message=Could not authenticate user");
        }

        return redirect("/login?message=Check email to continue sign in process");
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Sign Up
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
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                                    Forgot password?
                                </a>
                            </div>
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

                    <div>
                        <SubmitButton
                            formAction={signUp}
                            className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
                            pendingText="Signing Up..."
                        >
                            Sign Up
                        </SubmitButton>
                        {searchParams?.message && (
                            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
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
