import { defineConfig } from '@fullstacksjs/eslint-config';
import storybook from 'eslint-plugin-storybook';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Merge all configurations
export default [
    // FullstacksJS base config
    ...defineConfig({
        typescript: {
            tsconfigRootDir: __dirname,
        },
    }),

    // Override conflicting rules to match your Prettier config
    {
        rules: {
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    singleQuote: true,
                    jsxSingleQuote: true,
                },
            ],
        },
    },

    // Storybook
    ...storybook.configs['flat/recommended'],
];
