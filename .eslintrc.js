module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  plugins: ['node', 'prettier'],
  rules: {
    'prettier/prettier': 2,

    'eqeqeq': [ 2, 'allow-null' ],

    'no-console': 0,
    'no-shadow': 2,
    'no-undef': 2,
    'no-unused-expressions': 0,
    'no-unused-vars': [ 2, { 'ignoreRestSiblings': true } ],
    'no-var': 2,
    'no-redeclare': 2,

    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-const-assign': 2,
    'no-empty-pattern': 2,
    'prefer-arrow-callback': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'template-curly-spacing': [ 2, 'never' ],

    'object-curly-spacing': [ 2, 'always' ],
    'quote-props': [ 2, 'consistent' ],

    'semi': [ 2, 'never' ],
    'space-before-blocks': [ 2, 'always' ],
    'newline-per-chained-call': [
      2,
      {
        ignoreChainWithDepth: 2,
      },
    ],
    'spaced-comment': [ 2, 'always' ],
    'keyword-spacing': 2,
  },
}
