// String.prototype.replaceAll()
// A new method to replace all instances of a substring without needing a regular expression.

const str1 = "hello john, hello again";
console.log(str1.replaceAll(/hello/g,"hi"));

// console.log(str1.replaceAll("hello","hi"));
const msg = "foo-bar-foo";
console.log(msg.replace(/foo/g, "baz")); // baz-bar-baz
