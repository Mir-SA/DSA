// Frequency Counter - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

function areThereDuplicates(...args) {
  if (!args.length) return false;

  const lookup = {};

  for (var items of args) {
    if (lookup[items]) return true;
    lookup[items] = 1;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 2));
