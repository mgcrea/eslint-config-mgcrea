module.exports = {
  'extends': [
    'eslint-config-airbnb/legacy'
  ].map(require.resolve),
  'rules': {
    "comma-dangle": [2, "never"],
    "id-length": 0,
    "max-len": 0,
    "no-console": 0,
    "no-unused-vars": [2, {"args": "none"}],
    "no-use-before-define": [2, "nofunc"],
    "object-curly-spacing": [2, "never"],
    "strict": [2, "global"],
    "vars-on-top": 1
  }
};
