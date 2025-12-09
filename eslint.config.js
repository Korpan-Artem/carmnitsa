import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files  : ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript'
    ],
    plugins        : ['import'],
    languageOptions: {
      ecmaVersion  : 2020,
      globals      : globals.browser,
      parserOptions: {
        ecmaVersion : 'latest',
        ecmaFeatures: { jsx: true },
        sourceType  : 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      'indent'     : ['error', 2, { ObjectExpression: 1, ArrayExpression: 1 }],
      'key-spacing': ['error', {
        beforeColon: false,
        afterColon : true,
        align      : 'colon'
      }],
      'object-curly-newline': ['error', { multiline: true, consistent: true }],
    },
  },
])
