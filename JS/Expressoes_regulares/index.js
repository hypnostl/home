
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    


function validateEmail(email) {
    return emailRegex.test(email);
  }
  

  function puxarValor() {
   
    const login = document.getElementById("login").value
    const passworld = document.getElementById("passworld").value
    if(validateEmail(login) === true )
    {
        console.log("Login aceito")
    }
    else{console.log("Login não aceito")}
    console.log("Valor do input:", login, passworld,validateEmail(login));
  }

