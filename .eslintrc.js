const jsRules = {
  'arrow-parens': 'off',
  camelcase: 'off',
  'comma-dangle': [2, 'always-multiline'],
  curly: [2, 'all'],
  'import/extensions': [0, 'never', {ts: 'never'}],
  'lines-between-class-members': 0,
  'no-extra-semi': 'off',
  'no-multiple-empty-lines': [
    2,
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    },
  ],
  'no-underscore-dangle': 0,
  'no-unused-vars': 'off',
  'no-useless-constructor': 'off',
  'react/forbid-prop-types': 'warn',
  'react/jsx-filename-extension': 0,
  'react/jsx-one-expression-per-line': 0,
  'no-console': 'error',
  semi: 'off',
};

const tsRules = {
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {allowHigherOrderFunctions: true},
  ],
  '@typescript-eslint/indent': [
    'error',
    2,
    {
      ignoredNodes: ['TSTypeParameterInstantiation'],
    },
  ],
  '@typescript-eslint/interface-name-prefix': 0,
  '@typescript-eslint/no-unused-vars': ['warn', {ignoreRestSiblings: true}],
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/semi': ['error'],
  '@typescript-eslint/explicit-member-accessibility': 'error',
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': ['error'],
};

module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
    },
  },
  rules: {
    ...jsRules,
    ...tsRules,
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      extends: '@react-native-community',
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        ...tsRules,
        ...jsRules,
      },
    },
  ],
};
