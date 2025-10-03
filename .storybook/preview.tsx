import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/nextjs-vite';
import '../src/app/globals.css';
import { Lato } from 'next/font/google';

const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
    display: 'swap',
    variable: '--font-lato',
});

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            test: 'todo',
        },
    },

    decorators: [
        withThemeByDataAttribute({
            defaultTheme: 'light',
            themes: {
                light: 'light',
                dark: 'dark',
            },
            attributeName: 'data-theme',
        }),
    ],
};

export default preview;
