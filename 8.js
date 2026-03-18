{
  // Ejercicio 8 – Control de acceso
  const USUARIO_CORRECTO    = "aprendiz";
  const CONTRASENA_CORRECTA = "sena2026";
  const MAX_INTENTOS        = 3;
  let intentos = 0;
  let acceso   = false;

  console.log("=== CONTROL DE ACCESO ===");

  while (intentos < MAX_INTENTOS) {
    intentos++;
    console.log(`\nIntento ${intentos} de ${MAX_INTENTOS}`);

    let usuario    = prompt(`Intento ${intentos} de ${MAX_INTENTOS}\nUsuario:`);
    let contrasena = prompt(`Intento ${intentos} de ${MAX_INTENTOS}\nContraseña:`);

    if (usuario === null || contrasena === null) {
      console.log("Acceso cancelado.");
      break;
    }

    if (usuario === USUARIO_CORRECTO && contrasena === CONTRASENA_CORRECTA) {
      acceso = true;
      break;
    } else {
      let restantes = MAX_INTENTOS - intentos;
      console.log(`Credenciales incorrectas. Intentos restantes: ${restantes}`);
      if (restantes > 0) {
        alert(`Credenciales incorrectas.\nTe quedan ${restantes} intento(s).`);
      }
    }
  }

  if (acceso) {
    console.log("¡Bienvenido! Acceso concedido.");
    alert("¡Bienvenido!");
  } else {
    console.log("Acceso denegado. Ha superado el número máximo de intentos.");
    alert("Acceso denegado.");
  }
}