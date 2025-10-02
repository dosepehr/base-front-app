'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const initialThemeState: ThemeProviderState = {
    theme: 'system',
    setTheme: () => null,
};

const ThemeProviderContext =
    createContext<ThemeProviderState>(initialThemeState);

export function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = 'vite-ui-theme',
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === 'undefined') return defaultTheme;
        return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    });

    useEffect(() => {
        const root = document.documentElement;
        let appliedTheme: Theme = theme;
        if (theme === 'system') {
            appliedTheme = window.matchMedia('(prefers-color-scheme: dark)')
                .matches
                ? 'dark'
                : 'light';
        }

        root.setAttribute('data-theme', appliedTheme);
    }, [theme]);

    const value: ThemeProviderState = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (!context) {
        console.error('useTheme must be used within ThemeProvider');
    }
    return context;
};
