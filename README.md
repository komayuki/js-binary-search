# js-binary-search

## array
```
const bSearch = require('js-binary-search');
const array = [3, 5, 12, 56, 100];
bSeach.search(array, 12);
// return { index: 2, item: 12 }
```

## associative_array
```
const bSearch = require('js-binary-search')
const array = [
  {id: 2},
  {id: 5},
  {id: 13},
  {id: 26}
]
bSeach.search_in_associative(array, 'id', 26)
// return {index: 3, item: {id: 26}}
```
