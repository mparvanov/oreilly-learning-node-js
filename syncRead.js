var fs = require('fs');


var f = fs.openSync('test.txt', 'r');
console.log(f);
var b = new Buffer.alloc(100000);
console.log(b);
var read_so_far = fs.readSync(f, b, 0, 100000);
console.log(read_so_far);
// console.log(read_so_far);
console.log(b.toString('utf8', 0, read_so_far));
