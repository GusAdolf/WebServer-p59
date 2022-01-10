const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/'));

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

//registrar un helper
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
});

app.get('/', (req, res) => {
    res.render("about", {
        titulo: "Acerca",
        nombre: "Gustavo",
        anio: new Date().getFullYear()
    });

});

app.get('/', (req, res) => {
    res.render("home", {
        titulo: "Home",
        nombre: "Gustavo",
        anio: new Date().getFullYear()
    });
});


/*
app.get('/', (req, res) => {
    //res.send('hola mundo');

    let salida = {
        nombre: 'Gustavo',
        edad: 23,
        url: req.url

    }
    res.send(salida);

});

app.get('/data', (req, res) => {

    res.send('data data data');

});


*/
app.listen(3000, () => {
    console.log("Escuchando peticiones en le puerto 3000");
});