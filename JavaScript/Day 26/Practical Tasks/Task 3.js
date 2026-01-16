function fakeApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

fakeApiCall()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
