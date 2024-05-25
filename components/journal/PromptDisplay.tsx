import { createClient } from "@/utils/supabase/client";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Key, useEffect, useState } from "react";


export default function PromptDisplay() {

    const supabase = createClient();

    interface PromptData {
        prompt: string
        helper_text: string
    }

    const [prompts, setPrompts] = useState<any>(undefined);
    const [currentPrompt, setCurrentPrompt] = useState<PromptData>()

    useEffect(() => {
        const fectchData = async () => {
            try {
                let { data: prompts, error } = await supabase
                    .from('prompts')
                    .select('*')

                setPrompts(prompts);
            } catch (error) {
                console.log(`Error fetching prompts ${error}`)
            }
        }

        fectchData();
    }, [])

    const handleclick = () => {
        const randInt = Math.floor((Math.random() * prompts.length));
        // setCurrentPrompt(prompts[randInt]?.prompt);
        setCurrentPrompt(prompts[randInt]);
    }

    return (
        <div className="bg-indigo-50/80 shadow sm:rounded-lg mbn-4">
            <div className="px-4 py-5 sm:p-6">
                <div className="sm:flex sm:items-start sm:justify-between">
                    <div>
                        <div className="mt-2 max-w-xl text-sm text-indigo-600">
                            <p className="mt-6 font-medium font-size sm:text-sm md:text-lg">{currentPrompt?.prompt}</p>
                            <p className="my-4 font-light font-size sm:text-sm md:text-md ">{currentPrompt?.helper_text}</p>
                        </div>
                    </div>
                    <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
                        <button
                            onClick={handleclick}
                            type="button"
                            className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <ArrowPathIcon className="-ml-0.5 h-5 w-5 hover:animate-spin" aria-hidden="true" />
                            Get Prompt
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}





