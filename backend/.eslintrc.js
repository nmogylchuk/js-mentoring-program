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
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    semi: 2,
    'no-console': 0,
    'no-debugger': 2,
    'func-names': 0,
    'import/extensions': 0,
    'no-unused-expressions': 'error',
    'no-unused-vars': 'off',
    'no-useless-return': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-undef': 'off',
  },
};
