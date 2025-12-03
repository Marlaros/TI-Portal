/** @type {import('next').NextConfig} */
const supabaseHost = process.env.SUPABASE_URL ? new URL(process.env.SUPABASE_URL).hostname : undefined;

const remotePatterns = [
    {
        protocol: 'https',
        hostname: 'dmsjourney.com',
        pathname: '/**',
    },
    {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8090',
        pathname: '/api/**'
    }
];

if (supabaseHost) {
    remotePatterns.push({
        protocol: 'https',
        hostname: supabaseHost,
        pathname: '/storage/v1/object/public/**'
    });
}

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns
    }
}

module.exports = nextConfig
