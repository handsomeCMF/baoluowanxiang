module.exports = {
  root: true,
  // files: ['**/*.ts', '**/*.tsx'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint'
  ],
  ignorePatterns: ['.eslintrc.js', '*.js'],
  rules: {
    "@typescript-eslint/no-explicit-any": "off" // 使用any 不提示报错
  }
}