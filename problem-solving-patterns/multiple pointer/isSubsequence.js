// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(pattern, str) {
  if (str.length < pattern.length) return false;

  let i = 0;
  let j = 0;

  while (i < pattern.length && j < str.length) {
    if (pattern[i] === str[j]) i++;
    j++;
  }

  return i === pattern.length;
}

console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "acb"));
console.log(isSubsequence("", "cat"));
