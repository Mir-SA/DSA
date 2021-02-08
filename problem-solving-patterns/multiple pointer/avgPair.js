// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in the array
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time Complexity: O(N)
// Space Complexity: O(1)

function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    tempAvg = (arr[left] + arr[right]) / 2;
    if (tempAvg === avg) return true;
    if (tempAvg > avg) right--;
    else left++;
  }

  return false;
}

console.log(averagePair([1, 3, 3, 5, 7, 8, 8, 10, 19], 7.5));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4));
