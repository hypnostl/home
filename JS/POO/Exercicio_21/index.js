const Character = require('./Character.js')
const Thief = require('./Thief.js')
const Mage = require('./Mage.js')
const Warrior = require('./Warrior.js')

const thiago = new Mage("Thiago",100,30,40,110)
const lopes = new Thief("Lopes",100,70,30)
const jose = new Warrior("Jose",100,80,50,150,true)


thiago.atk(lopes)
thiago.heal(thiago)
console.table({thiago,lopes,jose})