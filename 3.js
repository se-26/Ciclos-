// const: se usa para declarar una CONSTANTE
// una constante es un valor que NO puede cambiar durante la ejecución del programa
// aquí definimos el dinero inicial del usuario
const saldoInicial = 100000;

// let: se usa para declarar variables que SÍ pueden cambiar
// en este caso "saldo" irá cambiando cada vez que el usuario retire dinero
let saldo = saldoInicial;

// variable booleana (true/false)
// controla si el ciclo sigue ejecutándose o se detiene
let continuar = true;

// while: es un ciclo que se repite MIENTRAS la condición sea verdadera
// en este caso, el programa seguirá ejecutándose mientras continuar sea true
while (continuar) {

    // prompt(): función que muestra una ventana para que el usuario ingrese datos
    // parseInt(): convierte el dato (texto) a número entero
    let retiro = parseInt(prompt("Ingrese el valor a retirar:"));

    // isNaN(): verifica si el valor NO es un número (NaN = Not a Number)
    // también validamos que no sea negativo o cero
    if (isNaN(retiro) || retiro <= 0) {
        alert("Ingrese un valor válido");

        // continue: hace que el ciclo vuelva a empezar sin ejecutar lo demás
        // evita que el programa siga con datos incorrectos
        continue;
    }

    // estructura condicional (if)
    // aquí verificamos si el usuario intenta retirar más dinero del que tiene
    if (retiro > saldo) {
        alert("Fondos insuficientes. Su saldo es: " + saldo);
    } else {

        // operador -=
        // es una forma corta de escribir: saldo = saldo - retiro
        // aquí actualizamos el saldo restando el dinero retirado
        saldo -= retiro;

        alert("Retiro exitoso. Saldo restante: " + saldo);
    }

    // volvemos a preguntar si desea continuar
    let opcion = prompt("¿Desea hacer otro retiro? (si/no)");

    // toLowerCase(): convierte el texto a minúsculas
    // esto evita errores si el usuario escribe "SI", "Si", etc.
    if (opcion.toLowerCase() !== "si") {

        // cambiamos el valor de continuar a false
        // esto hace que el ciclo while se detenga
        continuar = false;

        alert("Gracias por usar el cajero");
    }
}