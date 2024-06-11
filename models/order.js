const db = require('../db/connection');

// define la funcion create order con 5 parametros
const createOrder = (tableNumber, items, subtotal, total, callback) => {
//creo una consulta para insertar valores a la base dedatos 
    const sql = 'INSERT INTO orders (table_number, items, subtotal, total) VALUES (?, ?, ?, ?)';
    db.query(sql, [tableNumber, JSON.stringify(items), subtotal, total], (err, result) => {

        if (err) {
        return callback(err);
        }
//despues de completar el create order todo lo genera en un id 
        callback(null, result.insertId);
        });
};
module.exports = {createOrder};