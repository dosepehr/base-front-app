import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                },
                {
                    loader: 'file-loader',
                    options: {
                        name: 'static/[path][name].[ext]',
                    },
                },
            ],
            type: 'javascript/auto',
            issuer: {
                and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
            },
        });

        return config;
    },
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'irantogermany-api.liara.run',
            },
        ],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};
export default nextConfig;

