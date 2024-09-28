let BDcadastro = []
let intex = 0

function cadastroTec1()
{
    const nomeTec = document.createElement("label")
    nomeTec.innerText = "Tecnlogia: "
    const nomeTecInput = document.createElement("input")
    nomeTecInput.type="text"
    nomeTecInput.name="name"
    nomeTecInput.id = "nomeTec" + intex

    nomeTec.appendChild(nomeTecInput)

    let form = document.createElement("form")
    form.type="form"
    form.id="form" + intex
    
    const junior = document.createElement("label")
    junior.innerText = "0-2 anos"
    junior.for="junio"

    const juniorInput = document.createElement("input")
    juniorInput.type = "radio"
    juniorInput.name = "xp"
    juniorInput.id = "jinior" + intex
    juniorInput.value= "0-2 anos"
    

    const senior = document.createElement("label")
    senior.innerText = "3-4 anos"
    const seniorInput = document.createElement("input")
    seniorInput.type = "radio"
    seniorInput.name = "xp" 
    seniorInput.id = "senior" + intex
    seniorInput.value="3-4 anos"

    const pleno = document.createElement("label")
    pleno.innerText = "5+ anos"
    const plenoInput = document.createElement("input")
    plenoInput.type = "radio"
    plenoInput.name = "xp"
    plenoInput.id = "pleno" + intex
    plenoInput.value="5+ anos"
    
    intex++

    junior.appendChild(juniorInput)
    senior.appendChild(seniorInput)
    pleno.appendChild(plenoInput)

    const resgistrar = document.createElement("button")
    resgistrar.innerText = "Registar"

    form.append(nomeTec, junior,  senior, pleno, resgistrar)

    const cadastroTec = document.getElementById("cadastroTec").appendChild(form)
    
  
  
    resgistrar.addEventListener("click", function(ev){
        ev.preventDefault()
        let doc = document.getElementById("cadastroTec")
        const fullname = document.getElementById("fullname").value
        const nameTec = document.querySelector('#' + nomeTecInput.id )
        const xp = document.querySelector("input[name='xp']:checked").value

        alert("Dev "+fullname +" tecnologia " + nameTec +" experiencia "+ xp ) 
        const addDev = {nome: fullname, tecnologia:nameTec, experiencia:xp  }
        BDcadastro.push(addDev)

        console.log(doc)
        
        console.log(BDcadastro)
    })
   
   
}

function cadastroTec()
{
    

    cadastroTec1()

    
}
