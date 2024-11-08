import js from '@eslint/js'
import i18nextPlugin from 'eslint-plugin-i18next'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import globals from 'globals'
import ts from 'typescript-eslint'

export default ts.config(
  { ignores: ['dist'] },
  {
    extends: [...ts.configs.recommended, js.configs.recommended, i18nextPlugin.configs['flat/recommended']],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ...globals.es2022,
      ...globals.browser,
      ...globals.node,
    },
    plugins: {
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  perfectionistPlugin.configs['recommended-natural'],
)
