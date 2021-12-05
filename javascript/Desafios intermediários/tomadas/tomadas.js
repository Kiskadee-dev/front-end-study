const line = ["2", "4", "3", "2"];

let total = 0;
for(let i = 0; i < line.length; i++){
    const input = parseInt(line[i]);
    i != line.length-1 ? total += input-1 : total += input;
}

console.log(total);