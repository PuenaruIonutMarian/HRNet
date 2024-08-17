import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      // Options for compression
      algorithm: 'gzip', // or 'brotliCompress' for Brotli
      threshold: 10240, // Only compress files larger than this value (in bytes)
      deleteOriginFile: false // Keep the original files
    })
  ]
});
