// productOfArray
// Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.

function productOfArray(arr) {
  // edge case
  if (!arr.length) return 1;

  // first element in arr * next element called after 'slicing' the array
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([4, 2, 6, 7, 8]));
