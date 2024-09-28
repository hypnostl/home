class Charecter {
    constructor(name, PV, PA, PD) {
        this.name = name;
        this.PV = PV;
        this.PA = PA;
        this.PD = PD;
    }
    atk(char) {
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

module.exports = Charecter;
