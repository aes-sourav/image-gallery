import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Optional: Allows access from any IP address (useful for Docker containers)
    port: 3000, // Set your desired port here
  },
});