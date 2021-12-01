let Alunos = [
    {
        nome:"Fulano",
        nota:7,
        turma:'2A'
    },
    {
        nome:"Fulano2",
        nota:3,
        turma:'2A'
    },
    {
        nome:"Ciclano",
        nota:1,
        turma:'2A'
    },
    {
        nome:"Quadriano",
        nota:10,
        turma:'2A'
    },

];



function alunosAprovados(array, media){
    let aprovados = [];
    for(let i = 0; i < array.length; i++){
        
        const {nota, nome} = array[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(Alunos, 5));