/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["cdn.builder.io"],
        dangerouslyAllowSVG: true
    }
};

module.exports = nextConfig;
