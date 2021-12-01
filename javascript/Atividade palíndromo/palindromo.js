const StringError = new Error("String inválida");
StringError.name = "String inválida";

function verificaPalindromo(string){
    if(!string) {
        throw StringError;
    }

    let reverso = "";
    for(let i = string.length-1; i >= 0; i--){
        reverso = reverso + string[i];
    }

    let palindromo = string == reverso ? true : false;
    return palindromo;
}

function verificaPalindromoMetodo2(string){
    if(!string) throw StringError;

    let palindromo = string.split("").reverse().join("") === string;
    return palindromo;
}

function verificaPalindromoMetodo3(string){
    if(!string) throw StringError;

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}

try{
    console.log(verificaPalindromo(""));
} catch(e){
    console.log(e);
}

console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("curioso"));
console.log("---------------");
try{
    console.log(verificaPalindromoMetodo2(""));
} catch (e){
    console.log(e);
}
console.log(verificaPalindromoMetodo2("ovo"));
console.log(verificaPalindromoMetodo2("curioso"));
console.log("---------------");

try{
    console.log(verificaPalindromoMetodo3(""));
} catch(e) {
    console.log(e);
}

console.log(verificaPalindromoMetodo3("ovo"));
console.log(verificaPalindromoMetodo3("curioso"));