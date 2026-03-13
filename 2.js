// Programa para mostrar la tabla de multiplicar personalizada

let continuar = true;

while (continuar) {
    // Pedimos al usuario un número
    let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

    // Mostramos la tabla de multiplicar hasta el 12
    console.log("Tabla de multiplicar del " + numero);
    for (let i = 1; i <= 12; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }

    // Preguntamos si desea consultar otra tabla
    let respuesta = prompt("¿Desea consultar otra tabla? (si/no)").toLowerCase();

    if (respuesta !== "si") {
        continuar = false;
        console.log("Programa finalizado.");
    }
}
