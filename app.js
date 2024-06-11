//aca exporto funciones o clases dentro de la variables para poder utilizarla dentro de app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;
const orderRouter = require('./routes/orders');
const path = require('path');

//Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




//la carpeta "public" para archivos estáticos


app.use(express.urlencoded({ extended: true }));
app.use('/orders', orderRouter);





// Ruta para renderizar el archivo EJS
app.get('/', (req, res) => {
    res.render('index');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




//que utilize el puerto establecido 
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});