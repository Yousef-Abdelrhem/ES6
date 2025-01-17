export default class Shape {
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
  