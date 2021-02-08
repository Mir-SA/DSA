// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n^2)

function longestSubstring(str) {
  let obj = {};
  let i = 0;
  let maxLen = 0;
  let tempLen = 0;

  while (i < str.length) {
    if (typeof obj[str[i]] !== "undefined") {
      tempLen = 0;
      i = obj[str[i]] + 1;
      obj = {};
    } else {
      obj[str[i]] = i;
      tempLen++;
      i++;
    }
    maxLen = Math.max(maxLen, tempLen);
  }
  return maxLen;
}

// function longestSubstring(str) {
//   let obj = {};       // declare object
//   let i = 0;          // declare counter var
//   let maxLen = 0;     // length(max) var
//   let tempLen = 0;    // length(temp) var
//   while (i < str.length) {
//     if (typeof obj[str[i]] !== 'undefined') {
//       tempLen = 0;
// //       console.log(obj[str[i]])
//       i = obj[str[i]] + 1;
// //       console.log(obj)
//       obj = {};
//     } else {
//       obj[str[i]] = i;
//       tempLen++;
//       i++;
//     }
//     maxLen = Math.max(maxLen, tempLen);
//   }

//   return maxLen;
// }

console.log(longestSubstring("abcdefedc"));
console.log(longestSubstring("rithmschool"));
