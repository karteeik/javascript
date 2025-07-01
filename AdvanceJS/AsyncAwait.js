// async/await is a modern way to handle asynchronous operations like fetching data from an API, replacing the older .then() and .catch() syntax of Promises.

// It makes asynchronous code look and behave like synchronous code, which is easier to read and write.

// Why Use ?
// It solves callback hell and makes promise chaining cleaner.
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     // process data
//   })
//   .catch((error) => console.log(error));

// This is Your Async(function) Await(keyword) 
const apiURL = "https://icanhazdadjoke.com/";

async function fetchData() {
  const res = await fetch(apiURL,{
    headers: {
      Accept: "application/json",
    }
  });
  const data = await res.json();
  console.log(data.joke);
}

fetchData();