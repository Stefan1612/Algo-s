function sumZero(sortedIntArray) {
  /**
   * questions:
   *what if length =< 1?
   *
   *game plan:
   *
   * double loop through array
   * check if sortedIntArray[i] + sortedIntArray[j] = 0
   *
   *
   * complexity:
   * runtime: 2^n
   * space: O(1)
   */

  if (sortedIntArray.length <= 1) {
    return undefined;
  }

  for (let i = 0; i < sortedIntArray.length; i++) {
    for (let j = i + 1; j < sortedIntArray.length; j++) {
      if (sortedIntArray[i] + sortedIntArray[j] === 0) {
        return [sortedIntArray[i], sortedIntArray[j]];
      }
    }
  }
}

/* console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-1, 2, 1, 3])); */

function sumZeroMap(sortedIntArray) {
  /**
   *  game plan:
   *
   * create two pointers, left and right
   *
   * left = i = 0
   * right = i = sortedIntArray.length - 1
   *
   * check if sortedIntArray[left]  + sortedIntArray[right] === 0
   * if Yes => return [sortedIntArray[left], sortedIntArray[right]]
   * if NO => check if sortedIntArray[left]  + sortedIntArray[right] > 0
   *          => if Yes => RIGHT + 1
   *          => if NO => left + 1
   *
   * repeat until result or return undefined
   *
   *
   * complexity:
   * runtime: o(n)
   * space: o(1)
   *
   */
  if (sortedIntArray.length <= 1) {
    return undefined;
  }
  let right = sortedIntArray.length - 1;
  let left = 0;

  while (left < right) {
    if (sortedIntArray[left] + sortedIntArray[right] === 0) {
      return [sortedIntArray[left], sortedIntArray[right]];
    } else {
      if (sortedIntArray[left] + sortedIntArray[right] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
}

/* console.log(sumZeroMap([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroMap([-2, 0, 1, 3]));
console.log(sumZeroMap([1, 2, 3]));
console.log(sumZeroMap([-1, 2, 1, 3])); */

function countUniqueValues(sortedUintArray) {
  /**
   * questions: what if
   *
   * game plan:
   *
   * let counter = 0
   * let currentNewValue = sortedUintArray[0]
   * let currentPointer = sortedUintArray[1]
   *
   * for loop through array
   *
   * check if prior === current
   * if YES => currentPointer = sortedUintArray[i +1]
   * if NO => currentNewValue = sortedUintArray[i]
   *           counter++
   *          currentPointer = sortedUintArray[i +1]
   *
   *
   * return counter
   *
   *
   * complexity:
   * runtime: o(n)
   * space: o(1)
   */
  if (sortedUintArray.length <= 1) {
    return sortedUintArray.length;
  }

  let counter = 1;
  let currentNewValue = sortedUintArray[0];
  let currentPointer = sortedUintArray[1];

  for (let i = 1; i < sortedUintArray.length; i++) {
    if (currentNewValue === currentPointer) {
      currentPointer = sortedUintArray[i + 1];
    } else {
      currentNewValue = sortedUintArray[i];
      counter++;
      currentPointer = sortedUintArray[i + 1];
    }
  }

  return counter;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

// what if the array was unsorted?

/**
 * Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

 */

function averagePair(intArray, target) {
  /**
   *questions: what if length < 2 => just return false
    average: (a + b) / 2

    game plan: if it wasnt already sorted we would have to use a double for loop:

    define both pointers:

    let start = 0
    let end = intArray.length - 1

    while( start < end)
      let res = intArray[start] + intArray[end]) / 2
        => check if (res != target
            if YES => check if res > target 
                if YES => end --
                if NO => start++
        else {
          return true
        }
    return false

    complexity:
    space: o(1)
    runtime: o(n)

   */

  if (intArray.length < 2) {
    return false;
  }

  let start = 0;
  let end = intArray.length - 1;
  let res = (intArray[start] + intArray[end]) / 2;
  while (start < end) {
    res = (intArray[start] + intArray[end]) / 2;

    if (res != target) {
      if (res > target) {
        end--;
      } else {
        start++;
      }
    } else {
      return true;
    }
  }

  return false;
}

/* console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false */

/**
 * Write a function called console.log(isSubsequence( which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 */
function isSubsequence(firstStr, secondStr) {
  // good luck. Add any arguments you deem necessary.

  /**
   * questions:
   *
   *
   * game plan:
   *
   * initiate two pointers:
   *
   * let first: 0
   * let second
   */

  let firstStrPointer = 0;
  let secondStrPointer = 0;

  while (secondStr.length > secondStrPointer) {
    if (firstStr[firstStrPointer] === secondStr[secondStrPointer]) {
      firstStrPointer++;
    }
    if (firstStrPointer === firstStr.length) {
      return true;
    }
    secondStrPointer++;
  }
  return false;
}
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
