
/* Read file async */

const {readFile, writeFile } = require('fs');

readFile ('./content/test.txt','utf-8',(err,result ) =>{
    if(err){
        console.log(err);
        return
    } 
    console.log(result);
})