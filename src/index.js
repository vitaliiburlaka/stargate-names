import uniqueRandomArray from 'unique-random-array'

import stargateNames from './stargate-names.json'

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

export default {
  all: stargateNames,
  random: random,
}
