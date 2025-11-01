(async () => {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    console.log(data.joke);
  } catch (error) {
    console.log("Fetch Failed:", error.message);
  }
})();