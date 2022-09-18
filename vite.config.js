import { defineConfig } from 'vite'
import autoprefixer from "autoprefixer"; 

export default defineConfig({
    root: './src',
    css: {
        postcss: {
          plugins: [autoprefixer],
        },
      },
});