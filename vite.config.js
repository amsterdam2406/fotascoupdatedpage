import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './', // ensures relative paths in the built files
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        service: resolve(__dirname, 'service.html')
      }
    }
  }
})