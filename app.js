const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//Handlebars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Servir contenido estatico 

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fernando Castro',
        titulo: 'Curso de node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Fernando Castro',
        titulo: 'Curso de node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Fernando Castro',
        titulo: 'Curso de node'
    });
})


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Esta aplicación está corriendo en http://localhost:${port}`);
});