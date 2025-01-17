let obj = {
  name: "joe",
  age: 22,
  address: "el shaide gwad hussine",
};

obj[Symbol.iterator] = objectIterator;
console.log(...obj);
function objectIterator() {
  const keys = Object.keys(obj);
  counter = -1;
  return {
    next: function () {
      counter++;
      if (counter < keys.length) {
        return { value: [keys[counter], obj[keys[counter]]], done: false };
      } else {
        return { value: [keys[counter], obj[keys[counter]]], done: false };
      }
    },
  };
}
