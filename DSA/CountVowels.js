let str = "javascriAEpt";
let vowels = "aeiouAEIOU";
let count = 0;

let vowelsArray = new Array();

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
    if (!vowelsArray.includes(str[i])) {
      vowelsArray.push(str[i]);
    }
  }
}

console.log(count);
console.log(vowelsArray);
