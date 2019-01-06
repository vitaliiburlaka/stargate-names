import stargateNames from './index'

describe('stargate-names', () => {
  function isArrayOfStrings(array) {
    return array.every(item => typeof item === 'string')
  }

  describe('all', () => {
    it('should be an array of strings', () => {
      expect(isArrayOfStrings(stargateNames.all)).toEqual(true)
    })

    it(`should contain 'Teal'c'`, () => {
      expect(stargateNames.all).toContain(`Teal'c`)
    })
  })

  describe('random', () => {
    it('should return a random item from the stargate.all', () => {
      const randomItem = stargateNames.random()

      expect(stargateNames.all).toContain(randomItem)
    })

    it('should return an array of random items if passed a number', () => {
      const randomItems = stargateNames.random(3)

      expect(isArrayOfStrings(randomItems)).toEqual(true)
      expect(randomItems).toHaveLength(3)
      randomItems.forEach(item => {
        expect(stargateNames.all).toContain(item)
      })
    })
  })
})
