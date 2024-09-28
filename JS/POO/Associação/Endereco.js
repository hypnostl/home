class Address {
    constructor(street, number, nighborhood, city, state){
        this.street = street
        this.number = number
        this.nighborhood = nighborhood
        this.city = city
        this.state = state
    }
    fullAddress(){
        return `Rua ${this.street}, nº ${this.number}, ${this.nighborhood}, ${this.city} - ${this.state}`
    }
}

module.exports = Address