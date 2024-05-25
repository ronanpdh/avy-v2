import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

export default function PrivacyPolicy() {
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
                <p className="text-base font-semibold leading-7 text-indigo-600">AVY's Privacy Policy</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Introduction</h1>
                <p className="mt-6 text-xl leading-8">
                    Welcome to Avy, a journaling app designed to help you understand and improve your mental well-being by analyzing your journal entries for sentiment and cognitive distortions. Your privacy is of utmost importance to us, and we are committed to protecting it. This Privacy Policy explains how we collect, use, and safeguard your data when you use our app.
                </p>
                <div className="mt-10 max-w-2xl">
                    <ul role="list" className="mt-4 max-w-xl space-y-8 text-gray-600">
                        <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Information We Collect</p>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">Personal Information:</strong> When you create an account with Avy, we collect personal information such as your email address, and any other information you choose to provide.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">Journal Entries:</strong> The content you write in your journal entries is collected and analyzed by our AI models to provide you with insights and feedback.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">Usage Data:</strong>We may collect information on how you access and use the app, including your interactions with the app, device information, and other diagnostic data.
                            </span>
                        </li>
                    </ul>
                    <ul role="list" className="mt-6 max-w-xl space-y-8 text-gray-600">
                        <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">How We Use Your Information</p>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">To Provide and Improve Our Services:</strong> We use your data to operate, maintain, and enhance the features of the app, including analyzing your journal entries for sentiment and cognitive distortions.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">To Communicate with You:</strong> We may use your personal information to send you updates, newsletters, and other communications related to the app.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <span>
                                <strong className="font-semibold text-gray-900">To Ensure Security:</strong>We use the information we collect to monitor and enhance the security of our app.
                            </span>
                        </li>
                    </ul>
                    <div className="mt-6 max-w-xl space-y-8">
                        <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Data Security</p>
                        <p className="mt-6">
                            Our Commitment: We employ advanced encryption methods to protect your data both in transit and at rest. Regular security audits are conducted to identify and address potential vulnerabilities. We maintain strict access controls to ensure that only authorized personnel can access your data.
                        </p>
                    </div>
                    <div className="mt-6 max-w-xl space-y-8">
                        <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Third Party Services</p>
                        <p className="mt-6">
                            Third-Party Services: While we handle most data processing in-house, we use reputable third-party services, such as Anthropic, to enhance our app’s functionality. Although we trust these partners, we cannot be held liable for any actions or data breaches that occur on their end.
                        </p>
                    </div>
                    <div className="mt-6 max-w-xl space-y-8">
                        <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Your Responsibility</p>
                        <p className="mt-6">
                            We advise you to avoid writing anything in your journal entries that you wouldn’t share publicly. While we strive to protect your data, it’s important to remain mindful of the information you choose to record.
                        </p>
                    </div>
                    <div className="mt-6 max-w-xl space-y-8">
                        <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Data Retention</p>
                        <p className="mt-6">
                            We retain your personal information and journal entries for as long as you maintain your account with Avy. If you choose to delete your account, your data will be permanently deleted from our servers.
                        </p>
                    </div>
                    <div className="mt-6 max-w-xl space-y-8">
                        <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Your Rights</p>
                        <p className="mt-6">
                            You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact our support team.
                        </p>
                    </div>
                </div>
                <div className="mt-16 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Changes to This Privacy Policy</h2>
                    <p className="mt-6">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We recommend reviewing this Privacy Policy periodically for any changes.
                    </p>
                    <p className="mt-6">
                        If you have any questions or concerns about our Privacy Policy or our data practices, please contact us at:
                        Email: support@avy.xyz
                    </p>
                </div>
            </div>
        </div>
    )
}
