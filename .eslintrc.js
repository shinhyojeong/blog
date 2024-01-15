module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'array-callback-return': ['error', { checkForEach: true }],
    'arrow-body-style': ['error', 'as-needed'],
    camelcase: 'error',
    'consistent-return': 'error',
    curly: 'error',
    'default-case-last': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'no-console': ['error', { allow: ['error'] }],
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-function': 'error',
    'prefer-template': 'error',
    'require-await': 'error',
    yoda: 'error',

    // react
    'react/jsx-boolean-value': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' }
    ],
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        reservedFirst: ['key']
      }
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }
    ],

    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'react/style-prop-object': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/no-unused-vars': 'off',

    // import
    'import/no-empty-named-blocks': 'error',
    'import/no-relative-packages': 'error',
    'import/no-useless-path-segments': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false
        },
        groups: [
          ['builtin', 'external', 'internal'],
          ['parent', 'sibling', 'index'],
          'type'
        ]
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            fixStyle: 'separate-type-imports'
          }
        ],
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'typeLike',
            format: ['PascalCase']
          }
        ],
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/prefer-function-type': 'error'
      }
    }
  ]
}
