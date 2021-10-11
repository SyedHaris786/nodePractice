/* OS Module */ 

const os = require('os');
const path = require('path');

const user = os.userInfo();
 
console.log(`The system uptime is ${os.uptime} seconds`);
console.log(user);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
};

console.log(currentOS);