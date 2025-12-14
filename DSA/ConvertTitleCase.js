const str = "hello javascript string problems";

let words = str.split(" ");
// console.log(words);

let result = "";

for(let word of words){
    result += word[0].toUpperCase() + word.slice(1) + " ";
}

console.log(result);
