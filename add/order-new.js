
 // estaba creando todos hasta que me puse a leer el codigo dado y me di cuenta que estaba casi todo :)
document.addEventListener('DOMContentLoaded', function () {
    renderButton();
});

function addorder(tableNumber, items, subtotal, total) {
    const sql = 'INSERT INTO orders (table_number, items, subtotal, total) VALUES (?, ?, ?, ?)';
    connection.query(sql, [tableNumber, items, subtotal, total], (err, result) => {
        if (err) {
        console.error('Error al añadir el pedido:', err);
        return;
        }
        console.log('Pedido añadido correctamente:', result);
    });
}

function renderButton() {
    document.getElementById('calcularBtn').textContent = "Calcular";
    document.getElementById('calcularBtn').addEventListener('click', function (event) {
        event.preventDefault();
        let precio = parseFloat(document.getElementById("precio").value); 
        let cantidad = parseInt(document.getElementById("cantidad").value);

        if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
            alert("Por favor, introduce un producto, precio y una cantidad válidos.");
            return;
        }

        let subtotal = calcularSubtotal(precio, cantidad);
        let total = calcularTotal(subtotal);

        alert(`Subtotal: ${subtotal.toFixed(2)}\nTotal (incluyendo 10% de propina): ${total.toFixed(2)}`);
    });
}

function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

function calcularTotal(subtotal) {
    return subtotal * 1.1; // Añadir el 10% de propina
}
function agregaror(tableNumber, items, subtotal, total) {
    document.getElementById('agregaror').textContent = "Hacer-pedido";
    document.getElementById('agregaror').addEventListener('click', function (event) {
    event.preventDefault();

    const sql = 'INSERT INTO orders (table_number, items, subtotal, total) VALUES (?, ?, ?, ?)';

    connection.query(sql, [tableNumber, items, subtotal, total], (err, result) => {

        if (err) {
        console.error('Error al añadir el pedido:', err);
        return;
        }
        console.log('Pedido añadido correctamente:', result);
    });
    });
};
