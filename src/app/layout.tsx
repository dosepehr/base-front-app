import type { Metadata } from 'next';

import './globals.css';
import ToastContainer from '@/components/Toast/ToastContainer';
import { Suspense } from 'react';
import ReactQueryProvider from '@/utils/api/ReactQueryProvider';
import NextTopLoader from 'nextjs-toploader';
import { estedad, lato } from 'fonts';
import { setupMocks } from '@/utils/api/mocks';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ThemeProvider } from '@/utils/theme/ThemeProvider';
setupMocks();

export const metadata: Metadata = {
    title: 'Base Front App',
    description: 'Base Front App',
};

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            dir='ltr'
            data-theme='dark'
            className={`antialiased overflow-x-hidden ${estedad.variable} ${lato.variable}`}
        >
            <body>
                <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
                    <ReactQueryProvider>
                        <NextTopLoader
                            color='#4FB8E8'
                            shadow='0 0 10px #4FB8E8,0 0 5px #4FB8E8'
                            showSpinner={false}
                        />
                        <NuqsAdapter>
                            <Suspense>
                                <ToastContainer />
                            </Suspense>
                            {children}
                        </NuqsAdapter>
                    </ReactQueryProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
