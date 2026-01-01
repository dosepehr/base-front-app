import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'sudo sepehr',
        short_name: 'sudo sepehr',
        icons: [
            {
                src: '/pwa/icons/web-app-manifest-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/pwa/icons/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/pwa/icons/web-app-manifest-144x144.png',
                sizes: '144x144',
                type: 'image/png',
            },
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        screenshots: [
            {
                src: '/pwa/screenshots/1.jpg',
                sizes: '1080x1920',
                type: 'image/gif',
                label: 'Application',
            },
        ],
    };
}
