var rollup = require('rollup');

var cache;
rollup.rollup({
  entry: 'src/js-binary-search.js',
}).
then(function (bundle) {
  var result = bundle.generate({
    format: 'umd',
    moduleName: 'bSearch',
    cache: cache
  });
  cache = bundle;

 bundle.write({
   format: 'umd',
   moduleName: 'bSearch',
   dest: 'dist/js-binary-search.js'
 });
}).catch(console.error);
