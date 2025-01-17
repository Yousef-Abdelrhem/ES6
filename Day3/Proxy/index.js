// create a dynamic object using Proxy such that
// it has only the following properties

// a∙ name property that accepts only
//  string of 7 characters.

// b∙ address property that accepts
// only string value.

// c∙ age property that accepts numerical
// value between 25 and 60.

obj = {};

const handler = {
  set(obj, prop, value) {
    if (prop === "name") {
      if (!(value.length === 7)) {
        throw new Error("name must be 7 chars");
      }
    } else if (prop === "address" && typeof value !== "string") {
      throw new Error("value must be string");
    } else if (prop === "age") {
      if (value < 25 || value > 60) {
        throw new Error("value must be between 25 and 60");
      }
    } 
    obj[prop] = value;
    return true;
  },
};

const prox = new Proxy(obj, handler);

prox.name = "joe1234";
prox.age = 25;
prox.address = "El Shahed Gwad Hussine";

console.log(obj);
