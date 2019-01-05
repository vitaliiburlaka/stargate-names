var uniqueRandomArray = require('unique-random-array')
var stargateNames = require('./stargate-names.json')
var getRandomItem = uniqueRandomArray(stargateNames)

function random(number) {
  if (number === undefined) {
    return getRandomItem()
  } else {
    var randomItems = []
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem())
    }

    return randomItems
  }
}

module.exports = {
  all: stargateNames,
  random: random
}