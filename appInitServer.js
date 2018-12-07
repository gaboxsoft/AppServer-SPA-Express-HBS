const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'content-type': 'application/json' })
        let output = {
            nombre: 'gabriel',
            edad: 53,
            url: req.url
        }

        res.write('Hola a todos');
        res.write(JSON.stringify(output));
        res.end();
    })
    .listen(8080);