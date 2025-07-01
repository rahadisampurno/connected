import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Ini sudah benar untuk repositori 'connected'
  base: '/connected/', 

  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});