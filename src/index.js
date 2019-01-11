const uniqueRandomArray = require('unique-random-array')

const stargateNames = require('./stargate-names.json')

const getRandomItem = uniqueRandomArray(stargateNames)

function random(number) {
  if (number === undefined) {
    return getRandomItem()
  } else {
    const randomItems = []
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem())
    }

    return randomItems
  }
}

module.exports = {
  all: stargateNames,
  random: random,
}
