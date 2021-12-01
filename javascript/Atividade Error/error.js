function validaArray(array, numero){
    try{
        if(!array || !numero) throw new ReferenceError("Número de argumentos inválidos");
        if (typeof(array) !== 'object') throw new TypeError("Array não é do tipo objeto");
        if (typeof(numero) !== 'number') throw new TypeError("Numero não é do tipo Number");
        if (array.length != numero) throw new RangeError("O tamanho do array não é o mesmo valor de numero");

        return array;
    } catch (e){
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
            //console.log(e.stack);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError");
            console.log(e.message);
            //console.log(e.stack);
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError");
            console.log(e.message);
            //console.log(e.stack);
        } else {
            console.log("Ocorreu um erro inesperado: "+e);
        }
    }
}

validaArray();
validaArray(1,1);
validaArray([1], 0);
validaArray([1], 2);
validaArray([1], 1);