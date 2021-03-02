var zlib = require('zlib');
var fs = require('fs');

var zip = zlib.createGzip();

var read = fs.createReadStream('file.txt');
var write = fs.createWriteStream('file.gz');
//Transform stream which is zipping the input file
read.pipe(zip).pipe(write);	
console.log("Zipped Successfully");		