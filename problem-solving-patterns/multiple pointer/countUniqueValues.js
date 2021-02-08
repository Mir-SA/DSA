// Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values
// in the array. There can be negative numbers in the array but it will be sorted.

// function countUniqueValues(arr) {
//     if(arr.length === 0) return 0;
//     let i = 0
//     for(j = 1; j < arr.length; j++) {
//         if(arr[i] !== arr[j]) {
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1
// }

// With two pointers
function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let counter = 1;

  for (let i = 0, j = 1; j < arr.length; j++, i++) {
    if (arr[i] !== arr[j]) counter++;
  }
  return counter;
}

// With single pointer
// function countUniqueValues(arr) {
//     if(!arr.length) return 0;
//     let counter = 1

//     for(let i = 0; i < arr.length - 1; i++) {
//         if(arr[i] !== arr[i + 1]) counter++;
//     }

//     return counter
// }

console.log(countUniqueValues([]));
console.log(countUniqueValues([3, 2, 1, 0]));
console.log(countUniqueValues([1, 2, 2, 4, 4, 7, 8, 12, 8, 46, 13]));
