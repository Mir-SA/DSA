// capitalizeWords
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  let newArr = [];

  if (!arr.length) return newArr;

  newArr.push(arr[0].toUpperCase());

  return [...newArr, ...capitalizeWords(arr.slice(1))];
}

var words = ["Im", "baby", "enamel", "pin", "celiac", "chillwave"];
console.log(capitalizeWords(words));
