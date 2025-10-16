import Drawer from '@/components/_ui/Drawer';
import Footer from '@/components/_ui/Footer';
import Header from '@/components/_ui/Header';
import Sidebar from '@/components/_ui/Sidebar';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <Drawer />
            <div className='flex'>
                <div className='hidden lg:flex'>
                    <Sidebar />
                </div>
                <div className='w-full'>{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;
