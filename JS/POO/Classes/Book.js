class Book {
    constructor(title){
        this.title = title
        this.published = false 

    }

    publicar(){
        this.published = true
    }
}

const Peru = new Book("Guerra")
const Chile = new Book("Chile")

Peru.publicar()
console.log(Peru, Chile)

console.log(Peru instanceof Book)