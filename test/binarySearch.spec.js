const bs = require('../index');
var assert = require('assert')

describe('binarySearch test', () => {
  it('test index', () => {
    const list = [1, 5, 32, 45, 51, 67, 79, 87, 99, 120]
    const target = 51;
    const result = bs.search(list, target)

    assert.equal(result.item, 51)
  }),

  it('reverse array', () => {
    let list = [1, 5, 32, 45, 51, 67, 79, 87, 99, 120]
    list = list.reverse()
    const target = 99;
    const result = bs.search(list, target)
    assert.equal(result, -1)
  })

  it ('binary search in associative_array', () => {
    let list = [
      { id: 1},
      { id: 29},
      { id: 45},
      { id: 66},
      { id: 77},
      { id: 89},
    ]
    const result = bs.search_in_associative(list, 'id', 77)
    assert.equal(result.index, 4)
  })

  it('check type', () => {
    const str = "str"
    const target = 99;
    const result = bs.search(str, target)
    assert.equal(result, "type error")
  })
})
