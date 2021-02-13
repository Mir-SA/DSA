// nestedEvenSum
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.
// P.S: refresh the console in case of error

function nestedEvenSum(obj) {
  let sum = 0;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "number" && obj[key] % 2 === 0) sum += obj[key];
      if (typeof obj[key] === "object") sum += nestedEvenSum(obj[key]);
    }
  }

  return sum;
}

const lol = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

console.log(nestedEvenSum(lol));
