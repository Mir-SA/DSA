// flatten
// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.

function flatten(arr) {
  let resultArr = [];

  for (let item of arr) {
    if (item instanceof Array) resultArr = resultArr.concat(flatten(item));
    else resultArr.push(item);
  }

  return resultArr;
}

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([[1], [2], [3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
