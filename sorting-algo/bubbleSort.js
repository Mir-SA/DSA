// function bubbleSort(arr) {
//     for(var i = arr.length ; i > 0; i--) {
//         for(var j = 0; j < i - 1; j++) {
//             console.log(arr, arr[j], arr[j+1])
//             if(arr[j] > arr[j+1]) {
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

function bubbleSort(arr) {
  //     var noSwaps;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (var i = arr.length; i > 0; i--) {
    //         noSwaps = true
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        //                 noSwaps = false
      }
    }
    //         if(noSwaps) break;
  }
  return arr;
}

// console.log(bubbleSort([5,3,-1,9,6]))
console.log(bubbleSort([5, 1, 2, 3, 4]));
