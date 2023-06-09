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
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8090',
                pathname: '/api/**'
            }
        ]
    }
}

module.exports = nextConfig
