import { defineConfig } from 'vite'
import autoprefixer from "autoprefixer"; 
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path'

export default defineConfig({
    root: './src',
    css: {
        postcss: {
          plugins: [autoprefixer],
        },
      },
    build: {
      outDir: './dist',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/index.html'),
          about: resolve(__dirname, 'src/about.html')
        },
      }
    },
    plugins: [
      handlebars({
        partialDirectory: resolve(__dirname, './src/components'),
      }),
    ],
});