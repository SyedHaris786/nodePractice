
const {readFileSync, writeFileSync, fstat} = require('fs');
const firstFile = readFileSync('./content/test.txt','utf-8');


writeFileSync('./content/retest.txt','New Data lalala', { flag : 'a'});

console.log(firstFile);