// function validAnagram(str1, str2) {
//     if(str1.length !== str2.length) return false

//     let lookup = {}

//     for(i = 0; i < str1.length; i++) {
//         let letter = str1[i]
//         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
//     }
//     console.log(lookup)

//     for(i = 0; i < str2.length; i++) {
//         let letter = str2[i]
//         if(!(lookup[letter])) {
//             return false
//         }  else {
//             lookup[letter] -= 1
//         }
//     }
//     return true
// }

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let lookup = {};

  for (const letter of str1) {
    lookup[letter] = ++lookup[letter] || 1;
  }

  for (const letter of str2) {
    if (lookup[letter]) lookup[letter]--;
    else return false;
  }

  return true;
}

console.log(validAnagram("cat", "act"));
console.log(validAnagram("aaz", "zza"));
