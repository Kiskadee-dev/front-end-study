function calc(a, b){
    if (!a || !b){
        console.log("Defina 2 números!");
        return
    }

    let comparacao = "não são";
    if (a === b){
        comparacao = "são";
    }

    let maiorOuMenorQue10 = "menor";
    if (a+b > 10) {
        maiorOuMenorQue10 = "maior";
    }

    let maiorOuMenorQue20 = "menor";
    if(a+b > 20) {
        maiorOuMenorQue20 = "maior"
    }

    console.log(`Os números ${a} e ${b} ${comparacao} iguais. Sua soma é ${a+b}, que é ${maiorOuMenorQue10} que 10 e ${maiorOuMenorQue20} que 20.`);
};

calc(1, 2);
calc(2, 1);
calc(1,1);
calc(10, 20);
calc(10, 5);
calc();
calc(-100, -20.5);