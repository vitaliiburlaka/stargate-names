var stargate = require('./index')

describe('stargate-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(isArrayOfStrings(stargate.all)).toEqual(true)

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string'
        })
      }
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
  })
})