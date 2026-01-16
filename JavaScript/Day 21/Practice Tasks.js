const colors =["Red","Green","Yellow","white","Blue"]

console.log(colors[0]);
console.log(colors[colors.length-1]);
colors.push("Black")
console.log(colors);
colors.pop();
console.log(colors);
colors.unshift("Black");
console.log(colors);
colors.shift();
console.log(colors);

const number=[10,20,30,50,100]

number.forEach(n => console.log(n));

let double= number.map(n=> n*2);
console.log(double);

let high = number.filter(n=> n>=50 );
console.log(high);

let totel = number.reduce((sum, mark) => sum + mark, 0);
console.log(totel);


