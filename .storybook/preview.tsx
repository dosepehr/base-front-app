import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
    // 🌐 Language switcher
    globalTypes: {
        lang: {
            description: 'Language direction',
            toolbar: {
                icon: 'globe',
                items: [
                    { value: 'en', right: '🇺🇸', title: 'English' },
                    { value: 'fa', right: '🇮🇷', title: 'Persian (RTL)' },
                ],
            },
        },

        // 🎨 Theme switcher
        theme: {
            description: 'Theme',
            defaultValue: 'light',
            toolbar: {
                icon: 'paintbrush',
                items: [
                    { value: 'light', title: 'Light' },
                    { value: 'dark', title: 'Dark' },
                ],
            },
        },
    },

    initialGlobals: {
        lang: 'en',
        theme: 'light',
    },

    parameters: {
        backgrounds: { disable: false },
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
        (Story, context) => {
            // Handle RTL/LTR
            const lang = context.globals.lang;
            const dir = lang === 'fa' ? 'rtl' : 'ltr';
            document.documentElement.setAttribute('dir', dir);

            // Handle Light/Dark Theme
            const theme = context.globals.theme;
            document.documentElement.setAttribute('data-theme', theme);

            return <Story />;
        },
    ],
};

export default preview;
