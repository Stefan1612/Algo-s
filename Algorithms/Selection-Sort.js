function selectionSort(array) {
  let temp = 0;
  let highest = array[0];
  for (let i = 0; i < array.length; i++) {
    highest = i;
    for (let j = i; j < array.length; j++) {
      if (array[highest] < array[j]) {
        highest = j;
      }
    }
    if (highest !== i) {
      temp = array[i];
      array[i] = array[highest];
      array[highest] = temp;
    }
  }

  return array;
}

// this function is not pure

function goodSelectionSort(unsortedArray) {
  //  we NEED to use slice() or ELSE WE WILL MODIFY THE ORIGINAL ARRAY WITH EACH FIRST LOOP ITERATION (splice()), and therefore reduce our loop counter even tho need it to stay the same
  let toSort = unsortedArray.slice();
  let res = [];

  let highest = unsortedArray[0];
  let index = 0;

  for (let i = 0; i < unsortedArray.length; i++) {
    for (let j = toSort.length - 1; j >= 0; j--) {
      if (toSort[j] > highest) {
        highest = toSort[j];
        index = j;
      }
    }
    res.push(highest);
    toSort.splice(index, 1);

    highest = toSort[0];
  }

  return res;
}

//this is a pure function because it doesn't mutate the original array
console.log(goodSelectionSort([1, 31, 312, 12, 31, 3, 23]));
console.log(goodSelectionSort([1, 2, 11, 15, 14]));
console.log(selectionSort([1, 31, 312, 12, 31, 3, 23]));
console.log(selectionSort([1, 2, 11, 15, 14]));

/**
 * The only case where selection sort would be used over bubble sort is when you need something less memory heavy (bubble sort swaps way more than selection sort)
 *
 *
 *
 */
