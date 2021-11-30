function verificaPalindromo(string){
    if(!string) {
        return "string inexistente";
    }

    let reverso = "";
    for(let i = string.length-1; i >= 0; i--){
        reverso = reverso + string[i];
    }

    let palindromo = string == reverso ? true : false;
    return palindromo;
}

function verificaPalindromoMetodo2(string){
    if(!string) return "string inexistente";

    let palindromo = string.split("").reverse().join("") === string;
    return palindromo;
}

function verificaPalindromoMetodo3(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo(""));
console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("curioso"));
console.log("---------------");
console.log(verificaPalindromoMetodo2(""));
console.log(verificaPalindromoMetodo2("ovo"));
console.log(verificaPalindromoMetodo2("curioso"));
console.log("---------------");
console.log(verificaPalindromoMetodo3(""));
console.log(verificaPalindromoMetodo3("ovo"));
console.log(verificaPalindromoMetodo3("curioso"));