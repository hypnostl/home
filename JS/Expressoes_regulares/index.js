
const emailRegex = /^[a-zA-Z0-9_]{2,}@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}$/;
const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,}$/;    


function validateEmail(email) {
    return emailRegex.test(email);
  }

  function validarPassworld(passworld)
  {
    return senhaRegex.test(passworld)
  }
  

  function puxarValor() {
   
    const login = document.getElementById("login").value
    const passworld = document.getElementById("passworld").value
    try{validateEmail(login) === true
        validarPassworld(passworld) === true
    }
    catch(error){
        alert("Login não aceito")
    }
    finally{
        alert("Logado!!!")
        console.log(login, passworld)
        document.querySelector("error")
    }
  }

