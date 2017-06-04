const fs = require('fs');
const readableStream = fs.createReadStream('input/00file.txt');
let data = '';
let chunk;

readableStream.on('readable', function() {
    while ((chunk = readableStream.read()) != null) {
        data += chunk;
    }
});

readableStream.on('end', function() {
    console.log(data)
});