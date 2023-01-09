//binary search iterative solution

function binarySearchIterative(sortedArray, value) {
  /**
   * questions: what if sortedArray.length = 0
   *
   * game plan:
   *
   * return - 1 if of sortedArray.length = 0 OR value not inside
   *
   * let start = 0
   *
   * let end = sortedArray.length - 1
   *
   * while (start <= end){
   * check if (sorted.Array[Math.floor((start + end) / 2)] === value){
   *      return Math.floor((start + end) / 2)
   * }#
   * else if(sorted.Array[Math.floor((start + end) / 2)] > value){
   *          end = Math.floor((start + end) / 2)
   * }
   * else if(sorted.Array[Math.floor((start + end) / 2)] < value){
   *          start = Math.floor((start + end) / 2)
   * }
   * }
   *
   *
   * return index or -1
   */

  if (sortedArray.length === 0) {
    return -1;
  }
  let start = 0;

  let end = sortedArray.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (sortedArray[mid] === value) {
      return mid;
    } else if (sortedArray[mid] > value) {
      end = mid - 1;
    } else if (sortedArray[mid] < value) {
      start = mid + 1;
    }
  }

  return -1;
}

/* console.log(binarySearchIterative([1, 2, 4, 6, 12, 532, 2313], 4));
console.log(binarySearchIterative([1, 2, 4, 6, 12, 532, 2313], 532));
console.log(binarySearchIterative([1, 2, 4, 6, 12, 532, 2313], 1));
console.log(binarySearchIterative([], 1231));
console.log(binarySearchIterative([1, 2, 4, 6, 12, 532, 2313], 1231)); */

// recursive binary searhc

function binarySearchRecursive(sortedArray, value) {
  /**
   *
   */

  if (sortedArray.length === 0) {
    return -1;
  }
  let start = 0;
  let end = sortedArray.length - 1;
  let mid = Math.floor((start + end) / 2);
  function helper(start, end, sortedArray, value) {
    mid = Math.floor((start + end) / 2);

    if (start > end) {
      return -1;
    } else if (sortedArray[mid] === value) {
      return mid;
    } else if (sortedArray[mid] > value) {
      end = mid - 1;
      return helper(start, end, sortedArray, value);
    } else if (sortedArray[mid] < value) {
      start = mid + 1;
      return helper(start, end, sortedArray, value);
    }
  }
  return helper(start, end, sortedArray, value);
}

console.log(binarySearchRecursive([1, 2, 4, 6, 12, 532, 2313], 4));
console.log(binarySearchRecursive([1, 2, 4, 6, 12, 532, 2313], 532));
console.log(binarySearchRecursive([1, 2, 4, 6, 12, 532, 2313], 1));
console.log(binarySearchRecursive([], 1231));
console.log(binarySearchRecursive([1, 2, 4, 6, 12, 532, 2313], 1231));
