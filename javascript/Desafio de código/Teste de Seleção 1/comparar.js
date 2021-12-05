const A = -16;
const B = 49;
const C = 43;
const D = -4;

let cA = B>C;
let cB = D>A;
let cC = ((C+D)>(A+B));
let cD = (C>=0 && D>=0);
let cE = A%2==0;
if (cA && cB && cC && cD && cE )
{
  console.log("Valores aceitos");
}else
{
  console.log("Valores nao aceitos");
}