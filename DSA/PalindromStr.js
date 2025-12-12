let str = "mim";
let rev = "";

for(let i=str.length - 1; i>=0; i--){
    rev+=str[i];
}

if(str === rev){
    console.log(`${rev} is Palindrome String`);
}else{
    console.log(`${rev} is not Palindrome String`);
}