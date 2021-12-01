const array = [1,1,2,2,3,3,4,4,5,5,6,6,6,7,7,8,8,9,9,10,10];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    mySet.size
    return [...mySet];
}

console.log(valoresUnicos(array));