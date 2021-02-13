// capitalizeFirst
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  // declare an empty arr
  const result = [];

  // for edge case....return empty arr
  if (!arr.length) return result;

  // capitalize first letter of first string of arr and push it off into 'result' array
  result.push(arr[0][0].toUpperCase() + arr[0].slice(1));

  return result.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["cat", "mat", "bat"]));
