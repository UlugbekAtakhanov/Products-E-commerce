import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "brostore.uz",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "oasis.opstatics.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
