import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
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
