import { defineConfig, mergeConfig } from 'vitest/config.js';
import viteConfig from './vite.config';

export default mergeConfig(viteConfig, defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
    }
}));
