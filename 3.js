const saldoInicial = 100000; // saldo inicial
let saldo = saldoInicial;

let continuar = true;

while (continuar) {
    let retiro = parseInt(prompt("Ingrese el valor a retirar:"));

    if (isNaN(retiro) || retiro <= 0) {
        alert("Ingrese un valor válido");
        continue;
    }

    if (retiro > saldo) {
        alert("Fondos insuficientes. Su saldo es: " + saldo);
    } else {
        saldo -= retiro;
        alert("Retiro exitoso. Saldo restante: " + saldo);
    }

    let opcion = prompt("¿Desea hacer otro retiro? (si/no)");

    if (opcion.toLowerCase() !== "si") {
        continuar = false;
        alert("Gracias por usar el cajero");
    }
}