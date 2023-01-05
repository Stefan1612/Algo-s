function maxSubarraySum(intArray, n) {
  /**
   * questions, what if the array.length < n
   *
   * game plan:
   *
   * return null if array.length < n
   * let res = 0
   *
   * for loop
   * check if res <= array[i] + array[i + 1... n]
   * if YES => res = array[i] + array[i + 1... n]
   *
   *
   * return res
   *
   * complexity:
   * runtime: o(n^2)
   * space: o(n)
   */

  if (intArray.length < n) {
    return null;
  }

  let res = -Infinity;

  for (let i = 0; i <= intArray.length - n; i++) {
    let temp = 0;
    for (let j = i; j < i + n; j++) {
      temp += intArray[j];
    }
    if (res < temp) {
      res = temp;
    }
  }
  return res;
}

function maxSubarraySumTwo(intArray, n) {
  /**
   * game plan:
   * let maxSum = 0
   *
   * for loop from 0 to n
   * maxSum = intArray[i] + .... n
   *
   * for loop from n to array.length - 1
   * let temp = subArray - intArray[i - num] + intArray[i]
   * let maxSum = Math.Max(temp, SubArray)
   * return maxSum
   *
   * complexity:
   * space: o(1)
   * runtime: o(n)
   */

  if (intArray.length < n) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += intArray[i];
  }
  tempSum = maxSum;
  for (let j = n; j < intArray.length; j++) {
    tempSum = tempSum - intArray[j - n] + intArray[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySumTwo([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySumTwo([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySumTwo([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySumTwo([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySumTwo([], 2)); // null
