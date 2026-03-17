let cantidadEstudiantes = 5;

for (let i = 1; i <= cantidadEstudiantes; i++) {
    let sumaNotas = 0;
    let cantidadNotas = 3; 

    for (let j = 1; j <= cantidadNotas; j++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${j} del estudiante ${i}:`));

        if (isNaN(nota) || nota < 0 || nota > 5) {
            alert("Nota inválida. Intente de nuevo.");
            j--; 
        } else {
            sumaNotas += nota;
        }
    }

    let promedio = sumaNotas / cantidadNotas;

    if (promedio >= 3.0) {
        alert(`Estudiante ${i} APROBÓ con promedio: ${promedio.toFixed(2)}`);
    } else {
        alert(`Estudiante ${i} REPROBÓ con promedio: ${promedio.toFixed(2)}`);
    }
}