import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Restore original settings
    outDir: 'build',
    sourcemap: true,
    // Use esbuild minifier instead of terser
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer': ['framer-motion'],
          'ui': ['lucide-react']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    // Optimize development server
    hmr: {
      overlay: false // Disable the HMR overlay for better performance
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react']
  }
}); 