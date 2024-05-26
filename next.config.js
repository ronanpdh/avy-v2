/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@mui/x-charts'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'omaccpaiarzuaiddlzne.supabase.co',
                port: '',
                pathname: '/storage/**'
            },
            {
                protocol: 'https',
                hostname: 'www.loom.com',
                port: '',
                pathname: '/embed/'
            }
        ],
    },
};

module.exports = nextConfig;
