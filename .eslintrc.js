// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    'indent': [
      'error',
      4
    ],
    'max-len': [
      'error',
      {
        'code': 120,
        'tabWidth': 4,
        'ignoreComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true
      }
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'quote-props': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'dot-notation': 'off',
    'no-restricted-syntax': 'warn',
    'arrow-parens': [
      'warn',
      'as-needed'
    ],
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'warn',
    'radix': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-prototype-builtins': 'off',
    'curly': [
      'error',
      'multi'
    ],
    'func-names': [
      'warn',
      'as-needed'
    ],
    'no-extend-native': [
      'error',
      {
        'exceptions': [
          'Array'
        ]
      }
    ],
    'no-continue': 'off'
  }
};
