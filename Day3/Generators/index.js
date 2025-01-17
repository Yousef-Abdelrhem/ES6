// Create a generator that returns fibonacci series that takes only
// one parameter. Make two different implementations as described below:
// 1. the parameter passed determines the number of elements
// displayed from the series.

// 1. the parameter passed determines the max number of the displayed series should not exceed its value.

function* FabonacciGenerator(n) {
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}
function* FabonacciGenerator(max) {
  let a = 0,
    b = 1;
  while (a <= max) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let obj = FabonacciGenerator(6);
let obj2 = FabonacciGenerator(6);

console.log(obj2.next());
console.log(obj2.next());
console.log(obj2.next());
console.log(obj2.next());
