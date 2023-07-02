const _ = require('lodash')



const Arha =  [1, [2, [3,[4]]]]
const newitems = _.flattenDeep(Arha)
console.log(newitems)