import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname =
    typeof __dirname !== 'undefined'
        ? __dirname
        : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],
    test: {
        name: 'storybook',
        browser: {
            enabled: true,
            headless: true,
            instances: [{ browser: 'chromium' }],
        },
        setupFiles: ['.storybook/vitest.setup.ts'],
        include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
        exclude: ['node_modules', 'dist', 'coverage', 'src/**/*.stories.tsx'],
        environment: 'jsdom',
        globals: true,
    },
});
