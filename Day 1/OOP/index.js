class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  CalcArea(width, height) {
    return this.width * this.height;
  }
  CalcPerimeter(width, height) {
    return 2 * (this.width + this.height);
  }

  toString() {
    return (
      "the Area is : " +
      this.CalcArea() +
      "  The Perimeter is: " +
      this.CalcPerimeter()
    );
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

class Square extends Shape {
  constructor(width) {
    super(width, width);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  CalcArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  CalcPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

let rec = new Rectangle(2, 3);
let squ = new Square(5);
let cir = new Circle(3);

console.log(rec.toString());
console.log(squ.toString());
console.log(cir.toString());
