// Ejercicio 7 – Contador de pares e impares
const TOTAL = 10;
let pares = 0;
let impares = 0;

console.log("=== CONTADOR DE PARES E IMPARES ===");
console.log(`Ingresa ${TOTAL} números:`);

for (let i = 1; i <= TOTAL; i++) {
  let num = parseInt(prompt(`Ingresa el número ${i} de ${TOTAL}:`));

  if (isNaN(num)) {
    alert("Valor inválido. Intenta de nuevo.");
    i--;
    continue;
  }

  if (num % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log("\n====== RESULTADO FINAL ======");
console.log(`Números pares:   ${pares}`);
console.log(`Números impares: ${impares}`);
alert(`Resultado:\nPares: ${pares}\nImpares: ${impares}`);