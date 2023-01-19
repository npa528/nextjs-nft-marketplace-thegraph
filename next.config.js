/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        NEXT_PUBLIC_APP_ID: "001",
        NEXT_PUBLIC_SUBGRAPH_URL:
            "https://api.studio.thegraph.com/query/40818/nft-marketplace/v0.0.1",
    },
}

module.exports = nextConfig
