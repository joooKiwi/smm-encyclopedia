// import type {UserConfig as UserConfig1} from 'vite'
// import type {UserConfig}                from 'vitest/node'
// import {defineConfig, mergeConfig}      from 'vitest/config'
//
// import viteConfig from './vite.config'
import react          from '@vitejs/plugin-react'
import commonjs       from 'vite-plugin-commonjs'
import tsconfigPaths  from 'vite-tsconfig-paths'
import {defineConfig} from 'vitest/config'

export default defineConfig({
    plugins: [
        react({babel: {plugins: [['babel-plugin-react-compiler',],],},},),
        tsconfigPaths(),
        commonjs(),
    ],
    define: {'process.env': process.env,},
    resolve: { alias: {
        src:  '/src',
        test: '/test',
    },},
    test: {
        environment: 'jsdom',
        dir: './test',
        setupFiles: ['./test/setupTests.ts',],
        css: false,
        // reporters: '/verbose',
        coverage: {
            provider: 'v8',
            reportsDirectory: 'coverage',
            reporter: ['text', 'json', 'html',],
            include: ['src/**/*.{ts,tsx}',],
            exclude: [],
        },
        // typecheck: {tsconfig: 'tsconfig.test.json',},
    },
},)
