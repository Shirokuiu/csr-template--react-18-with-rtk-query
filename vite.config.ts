/// <reference types="vitest" />

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '',
  plugins: [react(), viteTsconfigPaths(), svgr({ include: '**/*.svg?react' })],
  server: {
    open: false,
    port: 3000,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
});
