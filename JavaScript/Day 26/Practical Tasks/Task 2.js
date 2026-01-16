function showMessageAfterDelay(message, delay) {
  setTimeout(function () {
    console.log(message);
  }, delay);
}

showMessageAfterDelay("Hello after 3 seconds", 3000);
