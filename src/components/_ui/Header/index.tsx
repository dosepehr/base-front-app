'use client';
import Button from '@/components/Button';
import { useTheme } from '@/utils/theme/ThemeProvider';
import React from 'react';

const Header = () => {
    const { theme, setTheme } = useTheme();

    const appliedTheme =
        theme === 'system'
            ? window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
            : theme;

    const nextTheme = appliedTheme === 'dark' ? 'light' : 'dark';
    return (
        <header className='bg-primary'>
            <Button
                onClick={() => setTheme(nextTheme)}
                theme='secondary'
                size='sm'
            >
                change theme
            </Button>
        </header>
    );
};

export default Header;
