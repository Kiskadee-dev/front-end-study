const cockatiel = {
    nome: "tiel",
    idade: 2,
};

const pterodactyl = {
    nome: "flyby",
    idade: 90000,
};



function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade+anos} anos de idade.`;
}

console.log(calculaIdade.call(cockatiel, 30));
console.log(calculaIdade.apply(pterodactyl, [10]));
console.log(calculaIdade.bind(cockatiel, [5]));