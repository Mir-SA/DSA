// factorial by iterative method
// function fact(n) {
//     let total = 1
//     for(i = n; i > 1; i--) {
//         total *= i
//     }
//     return total
// }

function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}

fact(5);
