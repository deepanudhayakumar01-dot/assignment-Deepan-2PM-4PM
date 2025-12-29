class Shape{
    constructor(name) {
    this.name = name;
  }
}

class Circle extends Shape{
    constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape{
    constructor(side) {
    super("Square");
    this.side = side;
  }

  area() {
    return  this.side * this.side;
  }
}

const c1=new Circle(5);
 
console.log(c1.area().toFixed(1));
console.log(c1.name);

const s1=new Square(4);
console.log(s1.area())

