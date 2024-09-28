// const book = {
//     titulo: "Eniguima",
//     paginas: 40,
//     publicado: true,
//     estoque: 200,
//     tags:["fantasia", "medieval", "aventura"],
//     autor: {
//         nome: "Thiago",
//         idade: 35,
//         cidade: "BH"
//     },
//     addStoque(qtd){
//         this.estoque += qtd
//     },
//     addTag: function (tag)
//     {
//         this.tags.push(tag)
//     }

//     }

    function Book(title,pages, tags, author ){
        this.title = title
        this.pages = pages
        this.tags = tags
        this.author = author
        this.published = false
        this.inStock = 0
        this.addOnStock = function addOnStock(qtd){this.inStock += qtd}
        this.save = function(){`Salvo no banco de dados`}
    }

    const autor = {name: "Lopes Teixeira"}
    const tags = {tags: ["fantasia", "aventura"]}
    
const Guerra = new Book("Guerra", 450 , tags, autor)
const Paz = new Book("Paz", 350, tags,autor)
console.log(Guerra)
console.log(Paz)