let array = [1,2,3,4,5,6,7,8,9,10,2,2,2];

let newArr = array.map((value) => value*2);
console.log(newArr);

let newFilteredArray = array.filter((value) => value === 2 );
console.log(newFilteredArray)

let strArray = ['banana', 'maçã', 'pera', 'limão', 'mamão', 'melancia'];

let newFruitArr = strArray.filter((fruta) => fruta.includes('pera'));
console.log(newFruitArr);

newFruitArr = strArray.filter((fruta) => fruta.includes('m'));
console.log(newFruitArr);

newFruitArr = strArray.filter((fruta) => fruta.startsWith('m'));
console.log(newFruitArr);

newFruitArr = strArray.filter((fruta) => fruta.endsWith('a'));
console.log(newFruitArr);

console.log(array.reduce( (prev, current) => {
    return prev + current;
}));

