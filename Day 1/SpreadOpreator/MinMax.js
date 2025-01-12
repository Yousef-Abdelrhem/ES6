// let arr = [1, 2, 3, 4, 5];

// let Max = Math.max(...arr);
// let Min = Math.min(...arr);

/*
@params {max, min} 
*/ 
function calc(...arr) {
  let Max = Math.max(...arr);
  let Min = Math.min(...arr);
  return { Max, Min };
}
let { Max, Min } = calc(1, 2, 3, 4);
console.log(Max);
console.log(Min);

// let [a,b] =[]
// let {a,b}={obj.Max, obj.Min};
