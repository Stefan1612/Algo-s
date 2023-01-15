function bubbleSort(unsortedArray) {
  /**
     * 
     * what if unsortedArray.length = 0
     * 
     * game plan: 
     * 
    
     * 
     * for loop until sortedArray.length - 2
     * for loop
     * check if index > index + 1
     * if YES => swap index with index + 1
     *  counter++
     * if NO => do nothing
     * 
     
     */

  if (unsortedArray.length === 0) {
    return undefined;
  }
  for (let i = 0; i < unsortedArray.length; i++) {
    for (let j = 0; j < unsortedArray.length - 1; j++) {
      if (unsortedArray[j] > unsortedArray[j + 1]) {
        let temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j + 1];
        unsortedArray[j + 1] = temp;
      }
    }
  }
  return unsortedArray;
}

console.log(bubbleSort([1, 31, 312, 12, 31, 3, 23]));

/**
 *
 * optimize bubble sort
 */

function bubbleSortOptimized(unsortedArray) {
  if (unsortedArray.length === 0) {
    return undefined;
  }
  for (let i = unsortedArray.length - 1; i >= 0; i--) {
    let counter = 0;
    for (let j = 0; j < i; j++) {
      console.log(`${unsortedArray[j]} vs ${unsortedArray[j + 1]}`);
      if (unsortedArray[j] > unsortedArray[j + 1]) {
        let temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j + 1];
        unsortedArray[j + 1] = temp;
        counter++;
      }
    }
    if (counter === 0) {
      break;
    }
  }
  return unsortedArray;
}

console.log(bubbleSortOptimized([1, 31, 312, 12, 31, 3, 23]));
console.log(bubbleSortOptimized([1, 2, 11, 15, 14]));

/**
 * runtime : o(n^2) (worst case)
 * space: o(n^2)
 *
 */
