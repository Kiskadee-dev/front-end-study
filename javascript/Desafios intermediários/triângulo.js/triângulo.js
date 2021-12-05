//let lines = gets().split('\n')

//let line = lines.shift().split(" ");
//const A = parseFloat(line[0]);
//const B = parseFloat(line[1]);
//const C = parseFloat(line[2]);

//const input = [6.0, 4.0, 2.0]
const input = [12, 8, 12];
let A = input[0];
let B = input[1];
let C = input[2];


let maior;
let soma;
let triangulo;

if (A > B && A > C) maior = A;
else if (B > C) maior = B;
else maior = C;

if (maior == A) soma = B + C;
else if (maior == B) soma = A + C;
else soma = B + A;

if (soma > maior) triangulo = true;
else triangulo = false;

if (triangulo) {
        const perimetro = (A+B+C).toFixed(1)
        console.log(`Perimetro = ${perimetro}`);
        //complete com a sua lógica    

} else {
        const area = (((A+B)/2)*C).toFixed(1);
        console.log(`Area = ${area}`);
        //complete com a sua lógica    
}

