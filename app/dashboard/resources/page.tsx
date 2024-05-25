const posts = [
    {
        id: 1,
        title: 'Thought Distortions',
        href: '#',
        description:
            'A look into what they are, how they work and what to recognise. Thought distortions are like mental filters that twist our thinking into something more negative than it really is. These patterns can make us feel worse about ourselves and the world around us, fueling anxiety, depression, and stress. Understanding and managing these tricky thoughts can help us feel better and handle life/`s ups and downs more effectively. Let/`s dive into some common thought distortions and learn how to tackle them',
        imageUrl:
            'https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/Resource%20media/Human%20Needs%20System.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJSZXNvdXJjZSBtZWRpYS9IdW1hbiBOZWVkcyBTeXN0ZW0uanBnIiwiaWF0IjoxNzE1Mzk2MDE0LCJleHAiOjE3NDY5MzIwMTR9.Pm81OZ4G-l4PSlSu1Img2PBgngZxsDtvpPAQxGtmHYs&t=2024-05-11T02%3A53%3A34.856Z',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Breathwork',
        href: '#',
        description:
            'Breath work is basically about taking a moment to pay attention to your breathing, which is something we usually just do on autopilot. It’s a simple tool that can calm your mind, reduce stress, and even help control pain. Whether you’re feeling anxious, overwhelmed, or just need a minute to reset, focusing on your breath can work wonders. Plus, you can do it anywhere, anytime—no special gear needed. ',
        imageUrl:
            'https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/Resource%20media/Air%20Pictures%20by%20Lampos%20Aritonang.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJSZXNvdXJjZSBtZWRpYS9BaXIgUGljdHVyZXMgYnkgTGFtcG9zIEFyaXRvbmFuZy5qcGciLCJpYXQiOjE3MTUzOTY2MzUsImV4cCI6MTc0NjkzMjYzNX0.PibKI4QCkJbgLDsi7daLvZ0VCXvcQVSNEwCMGUjz_1I&t=2024-05-11T03%3A03%3A56.024Z',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'More posts coming soon!',
        href: '#',
        description:
            'Heads up! Stay tuned because we’ll soon be rolling out more tools and tips to help you manage your well-being. We’re always looking to give you more support and ways to boost your mental health game. More good stuff coming your way soon!',
        imageUrl:
            'https://omaccpaiarzuaiddlzne.supabase.co/storage/v1/object/sign/Resource%20media/Psychology%20Human%20Needs.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJSZXNvdXJjZSBtZWRpYS9Qc3ljaG9sb2d5IEh1bWFuIE5lZWRzLmpwZyIsImlhdCI6MTcxNjUxMTgzNCwiZXhwIjoxNzQ4MDQ3ODM0fQ.MqVqgPfm2NtOxWW6FeFz0TD3896n4tXZ-11fKW0Fajk&t=2024-05-24T00%3A50%3A34.694Z',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
]

export default function Resources() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Resources</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Personalised feedback to help get you to where you want to be
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                        >
                            <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <time dateTime={post.datetime} className="mr-8">
                                    {post.date}
                                </time>
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                    <div className="flex gap-x-2.5">
                                        {/* <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                                        {post.author.name} */}
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
