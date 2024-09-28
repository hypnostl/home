const Charecter = require("./Character.js");

class Thief extends Charecter {
  atk(char) {
    this.PA = this.PA * 2;
    console.log(
      `Os pontos de ataque de ${this.name} são dobrados ${this.PA} pois ele é um thief!!!`
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
}

module.exports = Thief


