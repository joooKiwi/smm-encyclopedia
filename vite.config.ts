import {defineConfig} from 'vite'
import react          from '@vitejs/plugin-react'
import commonjs       from 'vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/smm-encyclopedia/',
    plugins: [
        react({babel: {plugins: [['babel-plugin-react-compiler',],],},},),
        commonjs(),
    ],
    define: {'process.env': process.env,},
    resolve: { tsconfigPaths: true, },
},)
