/* var y = 1; */
//var y = 1;

var x = 1;
var y = 2;

function soma(a, b) {
	return a+b;
}

console.log(
	soma(x, y)
);

function returnEvenValues(arr){
	let evenNums = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i]%2 == 0){
			evenNums.push(arr[i])
		} else {
			console.log(`${arr[i]} não é par`)
		}
	}
	return evenNums;
}

console.log(
	returnEvenValues([1,2,4,5,6])
);