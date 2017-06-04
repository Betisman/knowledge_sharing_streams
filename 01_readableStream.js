const fs = require('fs');
const readableStream = fs.createReadStream('input/00file.txt');
let data = '';

readableStream.on('data', function(chunk) {
    data += chunk;
});

readableStream.on('end', function() {
    console.log(data);
});