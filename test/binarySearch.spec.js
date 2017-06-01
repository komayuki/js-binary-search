const binarySearch = require('../index.js');
var assert = require('assert')

describe('binarySearch test', () => {
  it('test index', () => {  
    const list = [1, 5, 32, 45, 51, 67, 79, 87, 99, 120]
    const target = 51;
    const result = binarySearch(list, target)
    assert.equal(result.item, 51)
  })
})
