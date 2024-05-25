import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";

import Header from "@/components/Header";
import { redirect } from "next/navigation";
import JournalCmd from "@/components/journal/JournalCmd";
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import { BookOpenIcon, ChartBarIcon, FaceSmileIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: '⌘ + J is your friend!',
    description:
      'Use ⌘ + J or ctrl + J to bring up the menu window. You can quickly access links and also write in quick journal entries so you can journal from wherever you are in the app.',
    href: '/dashboard/journal',
    icon: FaceSmileIcon,
  },
  {
    name: 'Stats',
    description:
      'Head over to the stats page to see what your frequent thinking patterns are, how many entries you have created and see the overall sentiment of your journal entries.',
    href: '/dashboard/stats',
    icon: ChartBarIcon,
  },
  {
    name: 'Resources - Soming Soon',
    description:
      'Over time Avy will create personalised resources based on your stats. Resources will range from breathwork exercises to journaling exercies and articles.',
    href: '/dashboard/resources',
    icon: BookOpenIcon,
  },
]


export default async function Dashboard({ children }: { children: React.ReactNode }) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="bg-white sm:py-32 w-fit">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">AVY</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Journey Starts Here
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I built this application to gain a great understanding of how my mind works and to allow myself to notice patterns of negative thinking. I hope it can provide some helpful insight into yourself.<br></br>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-semibold italic">This isn't medical advice and shouldn't be followed as such. Please consult a professional for any advice. </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
            <button
              type="button"
              className="w-fit rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
            >
              ⌘ + J
            </button>
          </dl>
        </div>
      </div>
    </div>
  )
}