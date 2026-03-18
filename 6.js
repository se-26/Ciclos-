// Ejercicio 6 – Juego del adivinador
const MIN = 1;
const MAX = 20;
const secreto = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
let intentos = 0;
let adivinado = false;
let pista = "";

console.log(`=== JUEGO DEL ADIVINADOR ===`);
console.log(`Adivina el número entre ${MIN} y ${MAX}.`);

while (!adivinado) {
  let input = prompt(
    `Adivina el número entre ${MIN} y ${MAX}.\n` +
    `Intento: ${intentos + 1}\n` +
    (pista !== "" ? `\nPista: ${pista}` : "")
  );

  if (input === null) {
    console.log("Juego cancelado.");
    break;
  }

  let intento = parseInt(input);

  if (isNaN(intento) || intento < MIN || intento > MAX) {
    pista = `Ingresa un número válido entre ${MIN} y ${MAX}.`;
    console.log(`Intento inválido: ${input}`);
  } else {
    intentos++;
    console.log(`Intento ${intentos}: ingresaste ${intento}`);

    if (intento === secreto) {
      console.log(`¡Correcto! El número secreto era ${secreto}.`);
      console.log(`Lo adivinaste en ${intentos} intento(s).`);
      alert(`¡Correcto! El número era ${secreto}. Lo adivinaste en ${intentos} intento(s).`);
      adivinado = true;
    } else if (intento < secreto) {
      pista = `El número ${intento} es muy BAJO. El secreto es MAYOR.`;
      console.log(`Pista: el número secreto es MAYOR que ${intento}.`);
    } else {
      pista = `El número ${intento} es muy ALTO. El secreto es MENOR.`;
      console.log(`Pista: el número secreto es MENOR que ${intento}.`);
    }
  }
}