function outerFunction() {
  let count = 0;   // outer variable

  function innerFunction() {
    count++;
    console.log(count);
  }

  return innerFunction;
}

const counter = outerFunction();

counter(); 
counter(); 
counter();