// variable que define cuántos estudiantes vamos a evaluar
let cantidadEstudiantes = 5;

// for: ciclo controlado
// i = 1 → inicia en 1
// i <= cantidadEstudiantes → condición
// i++ → aumenta de uno en uno
for (let i = 1; i <= cantidadEstudiantes; i++) {

    // acumulador: sirve para ir sumando valores
    let sumaNotas = 0;

    // cantidad de notas por estudiante
    let cantidadNotas = 3;

    // ciclo anidado (un ciclo dentro de otro)
    // este sirve para ingresar varias notas por cada estudiante
    for (let j = 1; j <= cantidadNotas; j++) {

        // parseFloat(): convierte a número decimal (ej: 3.5)
        let nota = parseFloat(prompt(`Ingrese la nota ${j} del estudiante ${i}:`));

        // validamos que la nota sea correcta
        // no puede ser menor a 0 ni mayor a 5
        if (isNaN(nota) || nota < 0 || nota > 5) {
            alert("Nota inválida");

            // j--: disminuye el contador
            // hace que se repita esa misma nota
            j--;
        } else {

            // operador +=
            // suma la nota al acumulador
            // equivalente a: sumaNotas = sumaNotas + nota
            sumaNotas += nota;
        }
    }

    // calculamos el promedio
    // fórmula: suma de notas / cantidad de notas
    let promedio = sumaNotas / cantidadNotas;

    // estructura condicional para evaluar si aprueba
    if (promedio >= 3.0) {

        // toFixed(2): muestra solo 2 decimales
        alert(`Estudiante ${i} APROBÓ con promedio: ${promedio.toFixed(2)}`);

    } else {
        alert(`Estudiante ${i} REPROBÓ con promedio: ${promedio.toFixed(2)}`);
    }
}