let matchStr = "hello javaScript , you learn world best javaScript caurse";
console.log(matchStr.match("javascript"));   //null
console.log(matchStr.match("javaScript"));  // return an array  by default convert regular expression
console.log(matchStr.match(/javaScript/));   // return an array 
console.log(matchStr.match(/javaScript/g));   // all match string
console.log(matchStr.match(/javascript/gi));   // all match string

// matchAll() method - returns an iterator of all matches, provide details information about each match, return empty iterator if no match is found
// also add bydefault g flag at the end 
console.log(matchStr.matchAll("javaScript")); 