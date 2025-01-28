const myPromise = new Promise((resolve, reject) => {
  const dataFetched = true; // Simulate a condition
  if (dataFetched) {
    resolve("Data fetched successfully!");
  } else {
    reject("Failed to fetch data.");
  }
});

myPromise
  .then((result) => console.log(result)) // Handle success
  .catch((error) => console.error(error)) // Handle failure
  .finally(() => console.log("Operation complete.")); // Always runs
