const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');


const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');


//registrar un helper



app.get('/', (req, res) => {
    res.render("home", {
        titulo: "Home",
        nombre: "Gustavo",
        // anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render("about", {
        titulo: "Acerca"

    });

});

//nombre: "Gustavo",
//anio: new Date().getFullYear()


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
app.listen(port, () => {
    console.log(`Escuchando peticiones en le puerto ${port}`);
});