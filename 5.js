// variable acumuladora que guarda el total de la compra
let totalCompra = 0;

// variable booleana que controla el ciclo
let continuar = true;

// ciclo que permite agregar varios productos
while (continuar) {

    // pedimos el precio del producto
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    // validamos que el valor sea correcto
    if (isNaN(precio) || precio <= 0) {
        alert("Valor inválido");

        // vuelve a pedir el dato sin continuar el proceso
        continue;
    }

    // acumulamos el precio al total
    totalCompra += precio;

    // preguntamos si desea seguir comprando
    let opcion = prompt("¿Desea agregar otro producto? (si/no)");

    // si la respuesta no es "si", termina el ciclo
    if (opcion.toLowerCase() !== "si") {
        continuar = false;
    }
}

// después del ciclo evaluamos el total

// condición para aplicar descuento
if (totalCompra > 100000) {

    // calculamos el 10% del total
    let descuento = totalCompra * 0.10;

    // restamos el descuento
    let totalFinal = totalCompra - descuento;

    alert("Total compra: $" + totalCompra);
    alert("Descuento: $" + descuento);
    alert("Total a pagar: $" + totalFinal);

} else {

    // si no supera el monto, no hay descuento
    alert("Total a pagar: $" + totalCompra);
}