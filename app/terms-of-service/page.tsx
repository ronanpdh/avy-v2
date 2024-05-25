import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

export default function Terms() {
    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <button
                type="button"
                className="inline-flex items-center gap-x-1.5 mb-8 rounded-md bg-indigo-600 px-6 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                <a href='/' className="inline-flex">
                    <ArrowLeftCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    Back
                </a>
            </button>
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-indigo-600">AVY Terms of Service</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Introduction</h1>
                <p className="mt-6 text-xl leading-8">
                    Welcome to Avy! These Terms of Service (“Terms”) govern your use of our journaling app (“App”). By accessing or using Avy, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our App.

                </p>
                <div className="mt-10 max-w-2xl">
                    <ul role="list" className="mt-4 max-w-xl space-y-8 text-gray-600">
                        <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">User Accounts</p>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">Registration:</strong> Registration: To use Avy, you must create an account. You agree to provide accurate and complete information during the registration process and to update such information as necessary.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">Account Security:</strong>You are responsible for maintaining the confidentiality of your account login information and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.
                            </span>
                        </li>
                    </ul>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Use of the App</p>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">Permitted Use: </strong> You may use Avy for personal, non-commercial purposes only. You agree not to use the App for any illegal or unauthorized purpose.
                            </span>
                        </li>
                        <li className="">
                            <span>
                                <strong className="font-semibold text-gray-900">Prohibited Activities</strong>
                            </span>
                            <p className="mt-4">You agree not to:</p>
                            <li className="list-disc ml-8">Modify, adapt, or hack the App.</li>
                            <li className="list-disc ml-8">Use the App to transmit any viruses or malicious code.</li>
                            <li className="list-disc ml-8">Violate any laws or regulations in connection with your use of the App.</li>
                        </li>
                    </ul>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <p className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Data Privacy and Security</p>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">Data Collection:</strong>We collect personal information and journal entries as described in our Privacy Policy. By using Avy, you consent to the collection and use of your data in accordance with our Privacy Policy.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">Data Security:</strong>We employ advanced encryption methods and regular security audits to protect your data. While we strive to safeguard your information, we cannot guarantee absolute security.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">Third-Party Services:</strong>We use reputable third-party services, such as Anthropic, to enhance our App’s functionality. While we trust these partners, we cannot be held liable for any actions or data breaches that occur on their end.
                            </span>
                        </li>
                    </ul>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Disclaimer</p>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">No Medical Advice:</strong>Avy does not provide medical advice, diagnosis, or treatment. The information provided by Avy, including any content generated by the App, should not be considered a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health providers with any questions you may have regarding a medical condition.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">Use of Information:</strong>The content and features provided by Avy are for informational purposes only. Avy does not guarantee the accuracy, completeness, or usefulness of any information provided. Your reliance on the information provided by Avy is at your own risk.
                            </span>
                        </li>
                    </ul>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Limitation of Liability</p>
                        <li className="flex gap-x-3">
                            <p>To the maximum extent permitted by law, Avy, its developers, and associated third parties shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from: </p>
                    </li>
                    <li className="list-disc ml-4">Your use or inability to use the App.</li>
                    <li className="list-disc ml-4">Any unauthorized access to or alteration of your data.</li>
                    <li className="list-disc ml-4">Any other matter relating to the App.</li>
                </ul>
                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                    <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Changes to These Terms</p>
                    <li className="flex gap-x-3">
                        <span>
                            <strong className="font-semibold text-gray-900"></strong>We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the App after any changes indicates your acceptance of the new Terms.
                        </span>
                    </li>
                </ul>
                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                    <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Termination</p>
                    <li className="flex gap-x-3">
                        <span>
                            <strong className="font-semibold text-gray-900"></strong>We reserve the right to terminate or suspend your account and access to the App at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the App, us, or third parties, or for any other reason.
                        </span>
                    </li>
                </ul>
                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                    <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Governing Law</p>
                    <li className="flex gap-x-3">
                        <span>
                            <strong className="font-semibold text-gray-900"></strong>These Terms shall be governed by and construed in accordance with the laws of Canada/BC, without regard to its conflict of law provisions.
                        </span>
                    </li>
                </ul>
                <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                    <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Contact Us</p>
                    <li className="flex gap-x-3">
                        <span>
                            <strong className="font-semibold text-gray-900"></strong>If you have any questions about these Terms, please contact us at:

                            Email: support@avyapp.com
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        </div >
    )
}
