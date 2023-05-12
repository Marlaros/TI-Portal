/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dmsjourney.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'as1.ftcdn.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'as2.ftcdn.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'get.wallhere.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'wallpapers.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
}

module.exports = nextConfig
