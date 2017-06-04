const fs = require('fs');
const readableStream = fs.createReadStream('input/00file.txt');
const writableStream = fs.createWriteStream('output/04.txt');

readableStream.pipe(writableStream);