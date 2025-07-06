// Callback Hell happens when you nest too many callback functions inside each other.
// This situation is refers to asyncronous javascript programming

functionA(function() {
  functionB(function() {
    functionC(function() {
      functionD(function() {
        // you get lost here!
      });
    });
  });
});

// This creates a "pyramid" or "staircase" shape in your code

// Hard to read
// Hard to debug
// Error handling becomes tricky

// Solution & How to Fix this problem
// Use Promises or async/await