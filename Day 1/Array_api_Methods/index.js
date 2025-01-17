let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let flag = fruits.every((x) => {
  return typeof x === "string";
});

// console.log(flag);

/// b. test that some of array elements starts with "a"

let res = fruits.some((x) => {
  return x[0] === "a";
});
// console.log(res);

// c. generate new array filtered from the given array with only elements that
// starts with "b" or "s"

let newArr = fruits.filter((e) => {
  return e[0] === "b" || e[0] === "s";
});

// startWith

// console.log(newArr);

// d. generate new array each element of the new array contains a string
// declaring that you like the give fruit element
// “I like ” + fruit[0]

let modifiedArr = fruits.map((e) => "I like " + e);
modifiedArr.forEach((e) => {
  console.log(e);
});