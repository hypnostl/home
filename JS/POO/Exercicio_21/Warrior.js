const Character = require("./Character.js");

class Warrior extends Character {
  constructor(name, PV, PA, PD, PE, PSD) {
    super(name, PV, PA, PD);
    this.PE = PE;
    this.PSD = PSD;
    this.def();
  }
  atk(char) {
    if (this.PSD === true) {
      console.log(
        `${this.name} não pode atacar pois está na posição de defesa!!!`
      );
    } else {
      if (this.PA < char.PD) {
        console.log(
          `Pontos de ataque do ${this.name} é ${this.PA} menor doque os pontos de defesa ${char.PD} do ${char.name}!`
        );
      } else {
        char.PV = char.PV - (this.PA - char.PD);
        console.log(`${this.name} atacou ${char.name}
                os novos status de ${char.name} é `);
        console.log(char);
      }
    }
  }
  def() {
    if (this.PSD === true) {
        console.log(`${this.name} está em modo de defesa e seus pontos de defesa ${this.PD} são somados ao escusto + ${this.PE} somando total de`)
      this.PD = this.PD + this.PE;
        console.log(this.PD)
    }
  }
}

module.exports = Warrior
