// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// maxSubarraySum([100,200,300,400], 2) // 700

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

// Naive Solution with quadratic complexiety
// function maxSubarraySum(arr, n) {
//     if( n > arr.length) return null;

//     var max = -Infinity
//     for(i = 0; i < arr.length - n + 1; i++) {
//         var temp = 0
//         for(j = 0; j < n; j++) {
//             temp += arr[i + j]
//         }
//         if(temp > max) {
//             max = temp
//         }
// //         console.log(temp, max)
//     }
//     return max
// }

// Refactored Solution with linear complexiety
function maxSubarraySum(arr, n) {
  let tempSum = 0;
  let maxSum = 0;
  if (n > arr.length) return null;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 4, 5, 6], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([2, 3], 3));
