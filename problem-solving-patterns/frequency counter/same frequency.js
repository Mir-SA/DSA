// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency(n1, n2) {
  const str1 = `${n1}`;
  const str2 = `${n2}`;

  if (str1.length !== str2.length) return false;

  const counter = {};

  for (var char of str1) {
    counter[char] = ++counter[char] || 1;
  }

  for (var char of str2) {
    if (!counter[char]) return false;
    counter[char]--;
  }

  return true;
}

console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
