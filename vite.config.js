import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.2', // Allow connections from any network interface
  },

  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "remixicon/fonts/remixicon.css";`,
      },
    },
  },
})



