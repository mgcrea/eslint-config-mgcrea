module.exports = {
  extends: [
    'eslint-config-airbnb/legacy'
  ],
  rules: {
    'comma-dangle': [2, 'never'],
    'id-length': 0,
    'max-len': 0,
    'no-console': 0,
    'no-param-reassign': [2, {props: false}],
    'no-unused-vars': [2, {args: 'none'}],
    'no-use-before-define': [2, 'nofunc'],
    'object-curly-spacing': [2, 'never'],
    'space-before-function-paren': [2, 'never'],
    strict: [2, 'global'],
    'padded-blocks': 1,
    'vars-on-top': 0,
    'func-names': 0
  }
};
