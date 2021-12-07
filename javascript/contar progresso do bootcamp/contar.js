const EXTRA_INFO_DIV = document.getElementsByClassName("extra-info");
const EXTRA_INFO_LIST = EXTRA_INFO_DIV[0].getElementsByTagName('ul')[0];

let newButton = document.createElement('button');
newButton.classList.add('btn');
newButton.classList.add('btn-danger');
newButton.classList.add('btn-block');
newButton.innerHTML = "EXIBIR TAXA DE CONCLUSÃO DO BOOTCAMP";

let newLi = document.createElement('li');
EXTRA_INFO_LIST.appendChild(newLi);
newLi.appendChild(newButton);


newButton.addEventListener('click', ContarCursos);


function ContarCursos() {
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

    let str_arr = [
        `Cursos a iniciar: ${iniciar.length}`,
        `Cursos completos: ${cursosCompletos.length}`,
        `Cursos a continuar: ${continuar.length}`,
        `Desafios completos: ${desafiosCompletos.length}`,
        `Total de cursos: ${total}`,
        `Porcentagem concluída: ${computarTotal(total)}`
    ];

    let output_str = function() {
        let str = str_arr[0];
        for(let i = 1; i < str_arr.length; i++){
            str += '\n'+str_arr[i];
        }
        return str;
    }();
 
    alert(output_str);
    console.log('Cursos a iniciar: ', iniciar.length);
    console.log('Cursos completos: ', cursosCompletos.length);
    console.log('Cursos a continuar: ', continuar.length);

    console.log('Desafios completos: ', desafiosCompletos.length);
    console.log('Total de cursos: ', total);
    console.log('Porcentagem concluída: ', computarTotal(total));

    function computarTotal(total){
        return (((cursosCompletos.length+desafiosCompletos.length)/total)*100).toFixed(2).toString()+"%";
    }
};

