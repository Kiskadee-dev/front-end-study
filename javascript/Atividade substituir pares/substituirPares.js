function substituirPares(array){
    if(!array || !array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if (array[i] === 0)
            continue;
        array[i] = array[i] % 2 === 0 ? 0 : array[i];
    }

    return array;
}

console.log(substituirPares([0,1,2,3,4]));