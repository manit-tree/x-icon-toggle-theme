import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [cssInjectedByJsPlugin()],
    css: {
        transformer: 'lightningcss',
    },
    build: {
        outDir: './dist',
        minify: true,
        sourcemap: false,
        emptyOutDir: true,   
        lib: {
            entry: './src/index.js',
            name:'___',
            formats: ['es','iife'],
            fileName: (format) => `[name].[format].min.js`
        }
    }
})