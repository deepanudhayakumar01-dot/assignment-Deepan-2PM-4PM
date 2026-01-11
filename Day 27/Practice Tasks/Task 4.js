
const user = {
  name: "Deepan",
  role: "Full Stack Developer",
  age: 23
};

const jsonData = JSON.stringify(user);
console.log(jsonData);


const parsedData = JSON.parse(jsonData);
console.log(parsedData);

