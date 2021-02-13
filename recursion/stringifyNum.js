// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and
// finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
  let newObj = Object.assign({}, obj);

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(newObj, key)) {
      if (typeof obj[key] === "number") newObj[key] = newObj[key].toString();
      if (typeof obj[key] === "object")
        newObj[key] = stringifyNumbers(obj[key]);
    }
  }

  return newObj;
}

const obj = {
  first: 1,
  second: {},
  third: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
