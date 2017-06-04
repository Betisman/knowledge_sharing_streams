
res.write('Some Data!!');
res.end('Ended.');
When end() is called and every chunk of data has been flushed, a finish event is emitted by the stream. Just note that you can’t write to the stream after calling end(). For example, the following will result in an error.

res.write('Some Data!!');
res.end();
res.write('Trying to write again'); //Error!
Here are some important events related to writable streams: