let str = "welcome to the javascript";

let words = str.split(" ");
// console.log(words);

let highLength = "";

for (const word of words) {
    if(word.length > highLength.length){
        highLength = word;
    }
}

console.log(highLength);
