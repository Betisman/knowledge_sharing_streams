const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('input/05.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('output/05.txt'));