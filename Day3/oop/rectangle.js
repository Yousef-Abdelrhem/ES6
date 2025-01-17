import Shape from './shape.js';

export class Rectangle extends Shape {
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