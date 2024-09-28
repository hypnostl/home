const Charecter = require('./Character.js')

class Mage extends Charecter{

    constructor(name, PV, PA, PD, PM)
    {
        super(name, PV, PA, PD)
        this.PM = PM
    }

    atk(char) {
        this.PA = this.PA + this.PM ;
        console.log(
          `Os pontos de ataque de ${this.name} são somados ao pontos de magia ${this.PA} pois ele é um mage!!!`
        );
        if (this.PA < char.PD) {
          console.log(
            `Pontos de ataque do ${this.name} é ${this.PA} menor doque os pontos de defesa ${char.PD} do ${char.name}!`
          );
        } else {
          char.PV = char.PV - (this.PA - char.PD);
          console.log(`${this.name} atacou ${char.name}! Os novos pontos de vida de ${char.name} são ${char.PV}`);
          console.log(char);
        }
      }
      heal(char)
      {
        console.log(`${this.name} curou o perssonagem ${char.name} em ${this.PM * 2}!!!`)
        char.PV = char.PV + (this.PM * 2)
        console.log(char)
      }

    }


  module.exports = Mage