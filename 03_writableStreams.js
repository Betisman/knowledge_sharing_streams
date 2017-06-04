const fs = require('fs');
const readableStream = fs.createReadStream('input/00file.txt');
const writableStream = fs.createWriteStream('output/03.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', function(chunk) {
    writableStream.write(chunk);
});