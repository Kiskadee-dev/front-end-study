let chico = 300;
let bento = 1500;
let bernardo = 600;
let marina = 1000;
let iara = 150 ;
let marlene = 225;

let arr = [chico, bento, bernardo, marina, iara, marlene];

let total = arr.reduce( (accumulator, current) => {
    return accumulator+current;
} ); // Digite aqui o calculo total

console.log(total);