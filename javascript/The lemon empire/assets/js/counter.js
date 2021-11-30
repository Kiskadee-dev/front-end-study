var currentNumberWrapper = document.getElementById("number");
var currentNumber = 0;

console.log("Hello!")

function increment(){
    updatedNumber(currentNumber, currentNumber+1);
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    updatedNumber(currentNumber, currentNumber-1);
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;

}

function updatedNumber(oldNumber, newNumber){
    if(newNumber > oldNumber && newNumber % 10 == 0){
        let toastEx = document.getElementById("liveToast");
        let toast = new bootstrap.Toast(toastEx);
        toast.show();
    }
}