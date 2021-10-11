
/* Path Module */ 


const path = require('path');

const filePath = path.join('/text','/orignal_text','index.txt');

console.log(filePath);

const base = path.basename(filePath);

console.log(base);


const absolute = path.resolve(__dirname,'text','original_text','index.txt');
console.log(absolute);