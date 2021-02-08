// Naive Solution
// Time Complexiety: O(N^2) .....because of nested loop
// function same(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false
//     }
//     for(i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false
//         }
//         console.log(arr2)
//         arr2.splice(correctIndex, 1)
//     }
//     return true
// }


// Refactor for less complexiety
// Time complexiety: O(N)
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }
    
    let freqCounter1 = {}    
    let freqCounter2 = {}
    for(let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }
    for(let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1       
    }
    for(let key in freqCounter1) {
        if(!(key **2 in freqCounter2)) {
            return false
        }
        if(freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false
        }
    }
    return true
}


console.log(same([1,2,1], [4,1,1]))