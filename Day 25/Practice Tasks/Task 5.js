function createPromise() {
  return new Promise(resolve => {
    resolve("Resolved using async/await");
  });
}

async function run() {
  const result = await createPromise();
  console.log(result);
}

run();
