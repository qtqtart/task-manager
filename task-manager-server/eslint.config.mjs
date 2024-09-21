import js from "@eslint/js"
import perfectionist from "eslint-plugin-perfectionist"
import prettier from "eslint-plugin-prettier"
import globals from "globals"
import ts from "typescript-eslint"

const { config, plugin } = ts

export default config(
  ...ts.configs.recommended,
  js.configs.recommended,
  {
    ignores: ["dist", "node_modules"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.es2024,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": plugin,
      prettier,
    },
  },
  perfectionist.configs["recommended-alphabetical"],
)
