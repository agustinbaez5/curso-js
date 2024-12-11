function loguear() {
    // Credenciales 
    const usuario = "admin";
    const password = "contraseña";
  
    // Intentos
    const maxintentos = 3;
    let identificar = false;
    let intentos = 0;
  
    do {
      const loginusuario = prompt("Ingresa tu nombre de usuario:");
      const loginpassword = prompt("Ingresa tu contraseña:");
  
      if (loginusuario == null || loginusuario === "") {
        alert("No ingresó ninguna información. Inténtelo más tarde.");
        break;
      }
  
      if (loginpassword == null || loginpassword === "") {
        alert("No ingresó ninguna información. Inténtelo más tarde.");
        break;
      }
  
      if (loginusuario === usuario && loginpassword === password) {
        alert("¡Bienvenido, has iniciado sesión correctamente!");
        identificar = true; // Marcamos como éxito
      } else {
        intentos++;
        if (intentos < maxintentos) {
          alert(`Credenciales incorrectas. Te quedan ${maxintentos - intentos} intento(s).`);
        } else {
          alert("Has alcanzado el número máximo de intentos. Acceso bloqueado.");
          break;
        }
      }
    } while (!identificar && intentos < maxintentos);
  }
  
  // Llamamos a la función
  loguear();

