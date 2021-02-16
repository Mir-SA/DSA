// Function should accept a sorted array and a value
// Create a left pointer at the start of the array and right pointer at end of the array
// While the left pointer comes before right pointer:
//      1) Create a pointer in the middle
//      2) If you find the pointer return the index
//      3) If the value is too small move value up
//      4) If the value is too large move the pointer down
// If you never find the value return -1

function psuedoCode(arr, val) {
  let leftPtr = 0;
  let rightPtr = arr.length - 1;
  let middlePtr = Math.floor((leftPtr + rightPtr) / 2);
  //     console.log(leftPtr, middlePtr, rightPtr)

  while (arr[middlePtr] !== val && leftPtr <= rightPtr) {
    if (val < middlePtr) rightPtr = middlePtr - 1;
    else leftPtr = middlePtr + 1;

    middlePtr = Math.floor((leftPtr + rightPtr) / 2);
  }

  //      console.log(leftPtr, middlePtr, rightPtr)
  //      if(arr[middlePtr] === val) {
  //             return middlePtr
  //      }
  //      return -1

  return arr[middlePtr] === val ? middlePtr : -1;
}

console.log(psuedoCode([2, 3, 6, 7, 9, 12, 17], 12));
