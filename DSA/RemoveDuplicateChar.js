let str = "banana";
let uniqStr = "";

for (let i = 0; i < str.length; i++) {
  if (!uniqStr.includes(str[i])) {
    uniqStr += str[i];
  }
}

console.log(uniqStr);
