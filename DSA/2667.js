function createHelloWorld() {
  return function Hello(){
    return "Hello World";
  }
};

const f = createHelloWorld();
console.log(f({},null,42,4543,5435));