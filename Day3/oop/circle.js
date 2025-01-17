import Shape from "./shape.js";

export class Circle extends Shape {
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
