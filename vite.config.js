import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/help_shelters_project/' : '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";
                        @import "@/styles/devices.scss";
                        @import "@/styles/common.scss";`,
      },
    },
  },
  build: {
    outDir: 'dist', // Указывает на папку для собранных файлов
    homepage: "https://github.com/shelters_page_deploy/"
  },
})
