const express = require('express');
const router = express.Router();
const Order = require('../models/order');

//utiliza lo que hay dentro de models order funcion para crear una orden 

router.get('/new', (req, res) => {
    res.render('newOrder');
});

//crea un nuevo pedido a la orden utilizando funcniones de models order y agregando funciones como subtotal total 
router.post('/new', (req, res) => {

    const { tableNumber, items } = req.body;

 
    if (!tableNumber || !items || !Array.isArray(items)) {


        return res.status(400).send('Invalid input');
    }

 
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal * 1.10; // Incluye la propina del 10%
    Order.createOrder(tableNumber, items, subtotal, total, (err, orderId) => {

        if (err) {
        return res.status(500).send('Error al crear la orden');
        }
        const responseMessage = `Orden creada con el ID: ${orderId}<br><br><a href="/">Regresar a la página de inicio</a>`;
        res.status(201).send(responseMessage);


    
    });
    });
module.exports = router;
