// Log a welcome message and today's date (formatted for Asia/Kolkata / en-IN)

//creat the object for date and declare object is const
const today = new Date();
//assign object to const 
const formatted = today.toLocaleDateString('en-IN', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

console.log(`Welcome! Today is ${formatted}.`);