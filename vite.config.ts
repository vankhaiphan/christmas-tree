import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base to '/' for custom domain or './' for username.github.io/repo-name
// Change this to '/christmas-tree/' if deploying to username.github.io/christmas-tree
export default defineConfig({
  base: './',
  server: {
    port: 3010,
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'postprocessing-vendor': ['@react-three/postprocessing', 'postprocessing'],
        }
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
