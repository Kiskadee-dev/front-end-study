function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        return prev+current;
    });
}

const arr = [1, 2];

console.log(somaNumeros(arr));

const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 90,
    },
    {
        name: 'toalha',
        preco: 50,
    },
    {
        name: 'yougurt',
        preco: 100,
    },

];

const saldoDisponivel = 200;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce((prev, current, index) => {
        console.log('rodada ', index+1);
        console.log({ prev });
        console.log({ current });
        return prev-current.preco;
    }, saldoDisponivel );
}

console.log(calculaSaldo(saldoDisponivel, lista));