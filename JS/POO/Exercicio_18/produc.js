class Produc {
    constructor(name, description, price, inStorck){
        this.name = name
        this.description = description
        this.price = price
        this.inStorck = inStorck
       
    }
    addToStock(qtd){
        this.inStorck += qtd
    }
    calculateDiscont(desconto){
        const precoDesconto = this.price * (1 - desconto/100)
        
        console.log(`Preço com desconto é ${precoDesconto}`)

    }
}

const produto = new Produc("Monitor HQ", "Monitor full HD HQ", 199, 50)
produto.addToStock(50)
console.log(produto)
produto.calculateDiscont(10)
