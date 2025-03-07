class Shape {
  constructor(width) {
    this.width = width;
  }
  CalcArea() {}
  CalcPerimeter() {}

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
    super(width);
    this.height = height;
  }
  CalcArea() {
    return this.width * this.height;
  }
  CalcPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(radius);
  }
  CalcArea() {
    return Math.PI * Math.pow(this.width, 2);
  }
  CalcPerimeter() {
    return 2 * Math.PI * this.width;
  }
}

let rec = new Rectangle(2, 3);
let squ = new Square(5);
let cir = new Circle(3);

console.log(rec.toString());
console.log(squ.toString());
console.log(cir.toString());
