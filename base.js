module.exports = {
  'extends': [
    'eslint-config-airbnb/base'
  ].map(require.resolve),
  'rules': {
    "arrow-body-style": 0,
    "comma-dangle": [2, "never"],
    "id-length": 0,
    "max-len": 0,
    "no-console": 0,
    "no-param-reassign": [2, {"props": false}],
    "no-unused-vars": [2, {"args": "none"}],
    "no-use-before-define": [2, "nofunc"],
    "object-curly-spacing": [2, "never"]
  }
};
