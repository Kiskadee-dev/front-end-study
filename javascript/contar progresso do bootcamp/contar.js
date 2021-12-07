const ELEMENTOS_BOTOES = document.getElementsByClassName('sc-elJkPf');
let BOTOES = [...ELEMENTOS_BOTOES];


const COMPLETO_STR = 'BAIXAR CERTIFICADO';
const INCOMPLETO_STR = 'COMEÇAR AGORA';
const CONTINUAR_STR = 'CONTINUAR';
const DESAFIOS_COMPLETOS = 'VISUALIZAR SUBMISSÕES';

let iniciar = BOTOES.filter( (item) => {
    return item.innerHTML.includes(INCOMPLETO_STR);
})

let cursosCompletos = BOTOES.filter( (item) => {
    return item.innerHTML.includes(COMPLETO_STR);
})

let continuar = BOTOES.filter( (item) => {
    return item.innerHTML.includes(CONTINUAR_STR);
})

let desafiosCompletos = BOTOES.filter( (item) => {
    return item.innerHTML.includes(DESAFIOS_COMPLETOS);
})

let total = iniciar.length+cursosCompletos.length+continuar.length+desafiosCompletos.length;

console.log('Cursos a iniciar: ', iniciar.length);
console.log('Cursos completos: ', cursosCompletos.length);
console.log('Cursos a continuar: ', continuar.length);

console.log('Desafios completos: ', desafiosCompletos.length);
console.log('Total de cursos: ', total);
console.log('Porcentagem concluída: ', function (total) {
    return (((cursosCompletos.length+desafiosCompletos.length)/total)*100).toFixed(2).toString()+"%";
}(total));