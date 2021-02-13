// reverse
// Write a recursive function called reverse
// which accepts a string and returns a new string in reverse.

function rev(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + rev(str.slice(0, str.length - 1));
}

console.log(rev("awesome"));
console.log(rev("bat"));
