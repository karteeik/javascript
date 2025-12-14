let str = "programming";

let result = "";

for (let i = 0; i < str.length; i++) {
  let count = 0;
  for (let j = i; j < str.length; j++) {
    if (str[i] === str[j]) count++;
  }
  if (count > 1 && !result.includes(str[i])) {
    result += str[i] + " ";
  }
}

console.log(result);
