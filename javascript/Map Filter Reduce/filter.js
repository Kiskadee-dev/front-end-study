let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const callback = (value) => {
    return (value % 2 === 0);
}

function filtraPares(arr){
    return arr.filter(callback);
}

console.log(filtraPares(nums));