const maca = {
    value:2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item*this.value;
    }, thisArg);
}

function mapSemThis(arr){
    return arr.map((item) => {return item*2});
}

const nums = [1,2]
console.log('resultado do obj maçã ', mapComThis(nums, maca));
console.log('resultado do obj laranja ', mapComThis(nums, laranja));
console.log('resultado mapSemThis', mapSemThis(nums));