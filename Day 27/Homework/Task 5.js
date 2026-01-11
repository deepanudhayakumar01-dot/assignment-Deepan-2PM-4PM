const promise = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("Data loaded successfully");
  } else {
    reject("Something went wrong");
  }
});

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error("Error:", error);
  });