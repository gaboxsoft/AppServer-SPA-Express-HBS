const http = require('http');
const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers.js');


app.use(express.static(__dirname + '/public'));

// Declara el motor de vistas a usar: 
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    let output = {
        nombre: 'gabriel zuares valdes',
        edad: 53,
        url: req.url
    }

    // res.send(output);
    res.render('home', { nombre: 'gabriel zuares valdes', datos: output })

});
app.get('/about', (req, res) => {
    res.render('about', { nombre: 'gabriel zuares valdes' });
});
app.listen(3000, () => console.log('Atendiendo peticiones en el puerto 300...'));