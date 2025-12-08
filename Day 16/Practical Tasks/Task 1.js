
const today = new Date();
const formatted = today.toLocaleDateString('en-IN', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

console.log(`Welcome! Today is ${formatted}.`);

