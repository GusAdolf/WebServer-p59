//creacion del servidor
const http = require('http');
http.createServer((req, res) => {

    /*res.write('hola mundo');
    res.end();
    */
    res.writeHead(200, { 'Content-Type': 'applicaction/json' });

    let salida = {
        nombre: 'Gustavo',
        edad: 23,
        url: req.url

    }

    res.write(JSON.stringify(salida));
    res.end();

}).listen(8000);

console.log("Escuchando en el puerto 8000");