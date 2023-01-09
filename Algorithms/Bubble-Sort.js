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
