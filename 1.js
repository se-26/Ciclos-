// Programa para mostrar números primos entre 1 y 50

for (let numero = 2; numero <= 50; numero++) {
    let esPrimo = true; // asumimos que es primo

    // Verificamos si tiene divisores distintos de 1 y él mismo
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            esPrimo = false;
            break; // si encontramos un divisor, dejamos de verificar
        }
    }

    // Si sigue siendo primo, lo mostramos
    if (esPrimo) {
        console.log(numero);
    }
}
