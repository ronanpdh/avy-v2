"use client"

import { Suspense, useState } from 'react'
import { Dialog, Disclosure } from '@headlessui/react'
import { Bars3Icon, BookOpenIcon, ChartBarIcon, MinusSmallIcon, PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ArrowPathIcon,
  CheckIcon,
  BoltIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const features = [
  {
    name: 'Quick and Easy.',
    description: 'Use ⌘ + J or ctrl + J to bring up the menu window. You can quickly access links and also write in quick journal entries so you can journal from wherever you are in the app.',
    icon: BoltIcon,
  },
  {
    name: 'Analytics.',
    description: 'Built in Analytics to see what your frequent thinking patterns are, how many entries you have created and see the overall sentiment of your journal entries.',
    icon: ChartBarIcon,
  },
  {
    name: 'Resources',
    description: 'Over time Avy will create personalised resources based on your stats. Resources will range from breathwork exercises to journaling exercies and articles.',
    icon: BookOpenIcon,
  }
]

const faqs = [
  {
    question: "What is Avy?",
    answer: "Avy is a revolutionary journaling app designed to help you understand and improve your mental well-being. By analyzing your journal entries for sentiment and cognitive distortions, Avy provides you with valuable insights to recognize and challenge distorted thinking patterns.",
  },
  {
    question: "How it Works?",
    answer: "Using advanced AI, including Anthropic’s Claude model and our own cutting-edge technology, Avy reads and interprets your journal entries. It identifies emotional trends and thought distortions, offering personalized feedback and suggestions for cognitive restructuring.",
  },
  {
    question: "Why Choose Avy?",
    answer: "Using advanced AI, including Anthropic’s Claude model and our own cutting-edge technology, Avy reads and interprets your journal entries. It identifies emotional trends and thought distortions, offering personalized feedback and suggestions for cognitive restructuring.",
  },
  {
    question: "Is my data safe?",
    answer: `At Avy, we understand the importance of keeping your personal data secure. We take every possible measure to ensure your journal entries are protected. Our team is dedicated to maintaining the highest standards of data security and privacy. Third-Party Services - 
    While we handle the majority of data processing in-house, we do use reputable third-party services, such as Anthropic, to enhance our app’s functionality. Please note that while we trust these partners and their commitment to security, we cannot be held liable for any actions or data breaches that occur on their end.
    
    Your Responsibility - 
    We recommend that you avoid writing anything in your journal entries that you wouldn’t share publicly. Although we strive to protect your data, it’s important to remain mindful of the information you choose to record.
    
    Transparency and Trust - 
    Your trust is essential to us, and we are committed to being transparent about how we handle your data. If you have any questions or concerns about our privacy practices, please don’t hesitate to reach out to our support team.
    
    Start Your Journey with Confidence
    With Avy, you can journal with peace of mind, knowing that we prioritize your privacy and security every step of the way.`,
  },

]
const footerNavigation = {
  support: [
    { name: 'Contact', href: 'mailto:support@avy.xyz' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '/policy' },
    { name: 'Terms', href: '/terms-of-service' },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white w-full">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/dashboard" className="-m-1.5 p-1.5">
              <span className="sr-only">AVY</span>
              <Image
                className="h-8 w-auto"
                src="https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/company%20assets/A.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55IGFzc2V0cy9BLnBuZyIsImlhdCI6MTcxNjYwODc3MCwiZXhwIjoxNzQ4MTQ0NzcwfQ.KkU2tz8-tP49W8YPW-bDkA39wlmogo5RkZl8RZ7ZsII&t=2024-05-25T03%3A46%3A10.314Z"
                alt="AVY Logo"
                width={32}
                height={32}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {/* {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </Link>
            ))} */}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/login" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/dashboard" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/company%20assets/A.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55IGFzc2V0cy9BLnBuZyIsImlhdCI6MTcxNjYwODc3MCwiZXhwIjoxNzQ4MTQ0NzcwfQ.KkU2tz8-tP49W8YPW-bDkA39wlmogo5RkZl8RZ7ZsII&t=2024-05-25T03%3A46%3A10.314Z"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))} */}
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
          <Image
            src="https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/company%20assets/Boliviainteligente_3D_Render.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55IGFzc2V0cy9Cb2xpdmlhaW50ZWxpZ2VudGVfM0RfUmVuZGVyLmpwZyIsImlhdCI6MTcxNjY2Nzg3MywiZXhwIjoxNzQ4MjAzODczfQ.xL4mF0ppKsRZ1e5ZiWWYtGSmQZrEpG0cJ87kRH6FBoQ&t=2024-05-25T20%3A11%3A13.223Z"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover backdrop-blur-sm opacity-65"
            fill={true}
          />
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-white/10 hover:ring-white/20">
                  Read our story and what we're about.{' '}
                  <Link href="/about" className="font-semibold text-white">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Get to know your mind
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Discover Avy, the journaling app that not only helps you document your thoughts but also empowers you to gain deeper insights into your mind.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/signup"
                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Get started
                  </Link>
                  <Link href="#demo" className="text-sm font-semibold leading-6 text-white">
                    Live demo <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Write. Reflect. Transform</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Transform Your Thoughts</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Avy is a journaling app designed to help you understand and improve your mental well-being. By analyzing your journal entries for sentiment and cognitive distortions, Avy provides you with valuable insights to recognize and challenge distorted thinking patterns.              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                src="https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/company%20assets/home-screenshot.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55IGFzc2V0cy9ob21lLXNjcmVlbnNob3QucG5nIiwiaWF0IjoxNzE2Njg0Mjk2LCJleHAiOjE3NDgyMjAyOTZ9.wY3-3_0HgoHQyRHUvCi0XZpZkdcMJ8zNhsK1llohLGk&t=2024-05-26T00%3A44%3A56.807Z"
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
              <div
                className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r  opacity-50 animate-lavender-dream"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <Image
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                  src="https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/company%20assets/portrait-image.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55IGFzc2V0cy9wb3J0cmFpdC1pbWFnZS5wbmciLCJpYXQiOjE3MTY2MTUyMDUsImV4cCI6MTc0ODE1MTIwNX0.f9w3Omd0UxKBEhlwfg07WbtiPRGIzCocSie04IE74Uk&t=2024-05-25T05%3A33%3A25.688Z"
                  alt="AVY Logo which is an A over the top of a purple square"
                  fill={true}
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <figure className="relative isolate pt-6 sm:pt-12">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                >
                  <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                </svg>
                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    Unlock a healthier mindset with Avy, the intelligent journaling app that analyzes your entries for sentiment and cognitive distortions. Gain insights, recognize patterns, and cultivate a more positive outlook.
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base">


                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        {/* Video Demo Section */}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-48 h-3/4" id="demo">
          <div className="mx-auto max-w-6xl h-3/4 flex justify-center items-center">
            <Suspense fallback={<p>Loading Video...</p>}>
              <iframe loading="lazy" width="640" height="400" src="https://www.loom.com/embed/809f2467b4b044fa86a280e5b3d64836?sid=9f3deec1-67f1-47d3-a4ee-f3e7635e8b67" frameBorder="0" allowFullScreen></iframe>
            </Suspense>
          </div>
        </div>


        {/* FAQ section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">What's this all about?</h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </main >

      {/* Footer */}
      < footer className="mt-32 bg-gray-900 sm:mt-56" aria-labelledby="footer-heading" >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <Image
              className="h-7"
              src="https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/company%20assets/Avy_LogoWhite.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55IGFzc2V0cy9BdnlfTG9nb1doaXRlLnBuZyIsImlhdCI6MTcxNjY3MDcyOCwiZXhwIjoxNzQ4MjA2NzI4fQ.boZvczsy8CfK56UHkQ6-xte-ezMKs3YTMWb6Hopx07g&t=2024-05-25T20%3A58%3A48.812Z"
              alt="Avy"
              width={56}
              height={28}
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  {/* <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3> */}
                  <ul role="list" className="mt-6 space-y-4">
                    {/* {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))} */}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer >
    </div >
  )
}
