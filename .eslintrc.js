module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
}
