// Pick second element in array.
// Compare that element with first element in arr and swap if necessary.
// Continue to next element and if it is in the incorrect order, iterate through the sorted position(i.e the left side)
// to place the element in correct place.
// Repeat until arr is sorted

function insert(arr) {
  //     if(!arr.length) return false
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insert([45, 34, 75, 54]);
