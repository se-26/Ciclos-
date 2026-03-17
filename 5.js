let totalCompra = 0;
let continuar = true;

while (continuar) {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (isNaN(precio) || precio <= 0) {
        alert("Valor inválido. Intente de nuevo.");
        continue;
    }

    totalCompra += precio;

    let opcion = prompt("¿Desea agregar otro producto? (si/no)");

    if (opcion.toLowerCase() !== "si") {
        continuar = false;
    }
}


if (totalCompra > 100000) {
    let descuento = totalCompra * 0.10;
    let totalFinal = totalCompra - descuento;

    alert("Total compra: $" + totalCompra);
    alert("Descuento aplicado: $" + descuento);
    alert("Total a pagar: $" + totalFinal);
} else {
    alert("Total a pagar: $" + totalCompra);
}