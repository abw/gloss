import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import define from  './vite.defs.js'

export default defineConfig({
  plugins: [react()],
  define,
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
    include: ['test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    // exclude: ['test/setup.js', 'test/lib']
    exclude: ['test/setup.js', 'test/lib', 'test/components']
  },
  build: {
    minify: true,
    sourcemap: false,
    lib: {
      entry: 'lib/index.jsx',
      name: '@abw/react-gloss',
      fileName: 'react-gloss',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime'
      ],
      output: {
        globals: {
          'react': 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        },
      },
    },
  },
})