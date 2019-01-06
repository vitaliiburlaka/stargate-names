# stargate-names

Get random names from Star Wars characters.

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmcharts]
[![MIT License][license-badge]][license]

## Installation

```
npm install stargate-names
```

## Usage

```js
// Node.js CommonJS
const sgNames = require('stargate-names')
// ES module
import sgNames from 'stargate-names'

const allNames = sgNames.all
const randomName = sgNames.random()
const threeRandomNames = sgNames.random(3)
```

[build-badge]: https://img.shields.io/travis/vitaliiburlaka/stargate-names.svg
[build]: https://travis-ci.org/vitaliiburlaka/stargate-names
[coverage-badge]: https://img.shields.io/codecov/c/github/vitaliiburlaka/stargate-names.svg
[coverage]: https://codecov.io/github/vitaliiburlaka/stargate-names
[version-badge]: https://img.shields.io/npm/v/stargate-names.svg
[package]: https://www.npmjs.com/package/stargate-names
[downloads-badge]: https://img.shields.io/npm/dm/stargate-names.svg
[npmcharts]: http://npmcharts.com/compare/stargate-names
[license-badge]: https://img.shields.io/npm/l/stargate-names.svg
[license]: https://github.com/vitaliiburlaka/stargate-names/blob/master/LICENSE
