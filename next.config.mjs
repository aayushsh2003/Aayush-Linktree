/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'aayushkimehnat.vercel.app',
                port: '',
                pathname: '/img/aayush.png',
                search: '',
            },
        ],
        domains: ['aayushkimehnat.vercel.app'],
    },
};

export default nextConfig;
