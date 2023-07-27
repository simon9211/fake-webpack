// webpack/example/entry2.js
const depModule = require('./module');

console.log(depModule, 'dep');
console.log('This is entry 2 !');

// webpack/example/module.js
const name = '19Qingfeng';

module.exports = {
  name,
};