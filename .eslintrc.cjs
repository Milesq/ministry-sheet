/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "plugin:sonarjs/recommended"
  ],
  "plugins": [
    "eslint-plugin-import-helpers",
    "sonarjs"
  ],
  "rules": {
    "@typescript-eslint/no-empty-function": "off",
    "prefer-const": "warn",
    'import-helpers/order-imports': [
      'warn',
      {
          newlinesBetween: 'always',
          groups: [
              'module',
              '/^@shared/',
              ['parent', 'sibling', 'index'],
          ],
      },
    ],
  }
}
