import reactPlugin from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig({
  build: {
    cssMinify: true,
    minify: true,
  },
  plugins: [reactPlugin(), svgrPlugin()],
  resolve: {
    alias: {
      '@app': resolve(__dirname, 'src/app'),
      '@entities': resolve(__dirname, 'src/entities'),
      '@features': resolve(__dirname, 'src/features'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@shared': resolve(__dirname, 'src/shared'),
      '@widgets': resolve(__dirname, 'src/widgets'),
    },
  },
})
