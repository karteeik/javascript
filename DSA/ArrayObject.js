const userData = [
  { xyz: ["react", "php", "laravel"] },
  { pqr: ["react", "php", "laravel"] },
  { abc: ["mongodb", "nodejs", "kotlin"] },
  { xxx: ["nodejs", "php", "mongodb"] },
];

userData.forEach(currElem => {
    let keyName = Object.keys(currElem)[0];

    let skills = currElem[keyName];
    // console.log(keyName, "->", skills);

    if(skills.includes("react")){
        console.log(keyName, "knows React");
    }
})

const reactUser = userData
  .filter(obj => Object.values(obj)[0].includes("react"))
  .map(obj => Object.keys(obj)[0]);

console.log(reactUser);
