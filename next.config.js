/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    images: {
        unoptimized: true,
    },

    exportPathMap: function () {
        return {
            "/": { page: "/" },
        }
    },
}

module.exports = nextConfig
