var stargate = require('./index')

describe('stargate-names', function() {
  function isArrayOfStrings(array) {
    return array.every(function(item) {
      return typeof item === 'string'
    })
  }

  describe('all', function() {
    it('should be an array of strings', function() {
      expect(isArrayOfStrings(stargate.all)).toEqual(true)
    })

    it('should contain `Teal\'c`', function() {
      expect(stargate.all).toContain('Teal\'c')
    })
  })

  describe('random', function() {
    it('should return a random item from the stargate.all', function() {
      var randomItem = stargate.random()

      expect(stargate.all).toContain(randomItem)
    })

    it('should return an array of random items if passed a number', function() {
      var randomItems = stargate.random(3)

      expect(isArrayOfStrings(randomItems)).toEqual(true)
      expect(randomItems).toHaveLength(3)
      randomItems.forEach(function(item) {
        expect(stargate.all).toContain(item)
      })
    })
  })
})