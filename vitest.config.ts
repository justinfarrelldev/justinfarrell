import path from 'node:path';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        exclude: [...configDefaults.exclude],
        environment: 'happy-dom',
        setupFiles: 'setupTests.ts',
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './app'),
        },
    },
});
