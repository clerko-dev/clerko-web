module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  rules: {
    'react/jsx-no-undef': 'error',
    'no-undef': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
