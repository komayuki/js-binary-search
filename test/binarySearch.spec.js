const binarySearch = require('../index.js');
var assert = require('assert')

describe('binarySearch test', () => {
  it('test index', () => {  
    const list = [1, 5, 32, 45, 51, 67, 79, 87, 99, 120]
    const target = 51;
    const result = binarySearch(list, target)
    assert.equal(result.item, 51)
  }),

  it('reverse array', () => {
    let list = [1, 5, 32, 45, 51, 67, 79, 87, 99, 120]
    list = list.reverse()
    const target = 99;       
    const result = binarySearch(list, target)
    assert.equal(result, "not found")
  })

  it('check type', () => {
    const str = "str"
    const target = 99;       
    const result = binarySearch(str, target)
    assert.equal(result, "type error")
  })
})
