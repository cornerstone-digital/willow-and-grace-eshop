import path from 'path'

module.exports = {
  extends: [
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'plugin:jsx-control-statements/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-prefer-function-component/recommended',
    'eslint:recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-prefer-function-component'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}
