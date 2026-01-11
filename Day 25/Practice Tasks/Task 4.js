const myPromise = new Promise((resolve, reject) => {
    resolve("Promise resolved successfully!");
});

myPromise.then(result => {
    console.log(result);
});
