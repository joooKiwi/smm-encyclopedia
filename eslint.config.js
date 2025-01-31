import js            from '@eslint/js'
import globals       from 'globals'
import jest          from 'eslint-plugin-jest'
import reactHooks    from 'eslint-plugin-react-hooks'
import reactCompiler from 'eslint-plugin-react-compiler'
import reactRefresh  from 'eslint-plugin-react-refresh'
import tsEslint      from 'typescript-eslint'

export default tsEslint.config(
    {ignores: ['dist',],},
    {
        extends: [js.configs.recommended, ...tsEslint.configs.recommended, ...jest.configs.recommended,],
        files: ['**/*.{ts,tsx}',],
        languageOptions: {
            ecmaVersion: 2023,
            globals: globals.browser,
        },
        plugins: {
            'jest': jest,
            'react-compiler': reactCompiler,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', {allowConstantExport: true,},],
            'react-compiler/react-compiler': 'error',
        },
    },
)
