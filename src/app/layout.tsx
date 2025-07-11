import type { Metadata } from 'next';

import './globals.css';
import ToastContainer from '@/components/Toast/ToastContainer';
import { Suspense } from 'react';
import ReactQueryProvider from '@/utils/api/ReactQueryProvider';
import NextTopLoader from 'nextjs-toploader';
import { estedad, lato } from '../../public/fonts';
import { setupMocks } from '@/utils/api/mocks';
setupMocks();

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
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
            className={`antialiased overflow-x-hidden ${estedad.variable} ${lato.variable}`}
        >
            <body>
                <ReactQueryProvider>
                    <NextTopLoader
                        color='#ce4648'
                        shadow='0 0 10px #ce4648,0 0 5px #ce4648'
                        showSpinner={false}
                    />

                    <Suspense>
                        <ToastContainer />
                    </Suspense>
                    {children}
                </ReactQueryProvider>
            </body>
        </html>
    );
}
