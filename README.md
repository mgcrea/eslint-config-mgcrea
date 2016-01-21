# eslint-config-mgcrea

[![npm version](https://img.shields.io/npm/v/eslint-config-mgcrea.svg)](https://www.npmjs.com/package/eslint-config-mgcrea)

This package provides my own .eslintrc as an extensible shared config.

It's basically a small wrapper around [Airbnb's configurations](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), with some minor changes.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-mgcrea

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-mgcrea eslint-plugin-react eslint`
2. add `"extends": "mgcrea"` to your .eslintrc

### eslint-config-mgcrea/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-mgcrea eslint`
2. add `"extends": "mgcrea/base"` to your .eslintrc

### eslint-config-mgcrea/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-mgcrea eslint`
2. add `"extends": "mgcrea/legacy"` to your .eslintrc

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
