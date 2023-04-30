/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { checker } from 'vite-plugin-checker';
import { coverageConfigDefaults } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
    !process.env.VITEST
      ? checker({
          typescript: true,
          eslint: {
            lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
          },
        })
      : undefined,
  ],
  build: {
    sourcemap: 'hidden',
  },
  server: {
    open: true,
  },
  css: {
    devSourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'istanbul',
      all: true,
      enabled: true,
      reporter: ['text'],
      include: ['**/*.{jsx,tsx}'],
      exclude: [...coverageConfigDefaults.exclude, '**/main.tsx'],
    },
  },
});
