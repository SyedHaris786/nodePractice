
const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.end("Hello index");
    }
    if (req.url === '/about'){
        res.end('Hello about');

    }

    res.end(`   

    
        <H1>404 Resource Not Found</H1>

    `)
})


server.listen(5000);