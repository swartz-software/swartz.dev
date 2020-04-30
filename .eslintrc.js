module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  env: { es2020: true },
  extends: [
    'react-app',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    curly: ['error', 'multi-or-nest', 'consistent'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
