import {defineConfig} from 'vite'
import react          from '@vitejs/plugin-react'
import tsconfigPaths  from 'vite-tsconfig-paths'
import commonjs       from 'vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react(), tsconfigPaths(), commonjs(),],
    define: {'process.env': process.env,},
},)
