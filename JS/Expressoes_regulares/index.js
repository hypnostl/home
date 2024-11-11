
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    



function validateEmail(email) {
    return emailRegex.test(email);
  }
  
  // Testando
  console.log(validateEmail("usuario@dominio.com")); // true
  console.log(validateEmail("usuario@dominio"));     // false
  console.log(validateEmail("usuario@.com"));        // false
  console.log(validateEmail("usuario@@dominio.com")); // false