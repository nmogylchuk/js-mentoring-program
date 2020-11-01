module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'semi': 2,
    'no-console': 0,
    'no-debugger': 2,
    'func-names': 0,
    'import/extensions': 0,
    'no-unused-expressions': 'error',
  },
};
