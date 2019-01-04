var uniqueRandomArray = require('unique-random-array')
var stargateNames = require('./stargate-names.json')

module.exports = {
  all: stargateNames,
  random: uniqueRandomArray(stargateNames)
}