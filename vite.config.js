import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const src = resolve(__dirname, "./src/pages");
const dist = resolve(__dirname, "./dist");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/base/_variables.scss" as *;
          @use "@/styles/base/_mixin.scss" as *;
          `,
      },
    },
  },
})
