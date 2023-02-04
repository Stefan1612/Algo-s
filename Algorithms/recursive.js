// iterative factorial

function itFactorial(num) {
  let res = 1;
  for (let i = num; i > 1; i--) {
    res *= i;
  }
  return res;
}

/* console.log(itFactorial(3));
console.log(itFactorial(4));
console.log(itFactorial(5)); */

function recursiveFactorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * recursiveFactorial(num - 1);
}

/* console.log(recursiveFactorial(3));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5)); */

/**
 * Power
 *
 * Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
 *
 */

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// without helper function
function powerWithout(base, exponent) {
  if (base == 0 || exponent === 0) {
    return 1;
  }
  return base * powerWithout(base, exponent - 1);
}

// using a helper function

function power(base, exponent) {
  /**
   * questions: what if users either declares base or exponent as 0?
   *
   * game plan:
   *
   * iterative:
   *
   * recursive:
   *
   * let res  = 1
   *
   * check if exponent OR base <= 1
   * => if YES => return result
   *
   * Base case: if exponent = 1
   *
   * let res *= base
   *
   * call power(base, exponent - 1)
   */

  let res = 1;

  function helper(base, exponent) {
    if (exponent === 0 || base === 0) {
      return res;
    }

    res *= base;

    helper(base, exponent - 1);
  }

  helper(base, exponent);

  return res;
}

/* console.log(powerWithout(2, 0));
console.log(powerWithout(2, 2));
console.log(powerWithout(2, 4)); */

/**
 *
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 *
 */

function productOfArray(intArray) {
  /**
   * questions: what if array.length = 0
   *
   * game plan:
   *
   * base case: if array.length == 0
   *
   * return intArray[intArray.length - 1] * intArray[intArray.length - 1].pop()
   *
   */

  if (intArray.length === 0) {
    return 1;
  }

  return (
    intArray[intArray.length - 1] *
    productOfArray(intArray.slice(0, intArray.length - 1))
  );
}
/* console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60 */

/**
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 */

// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  /**
   * questions: can num be negative?
   *
   * game plan:
   *
   * base case: if num num = , return 1
   *
   * return num += recursiveRange(num -1)
   *
   */

  if (num === 1) {
    return 1;
  }

  return (num += recursiveRange(num - 1));
}

/* console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55 */

/**
 * Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
  /**
   * what if num is negative?
   *
   * game plan:
   *
   * base case= num <= 2 return 1
   *
   * return num + fib(num -1)
   */

  if (num <= 2) {
    return 1;
  }

  return fib(num - 2) + fib(num - 1);
}

/* console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465 */

// reverse
/**
 *
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */

function reverse(string) {
  /**
   * game plan:
   *
   * base case: if string.length == 1 return string
   *
   * return string[string.length - 1] + reverse(string.slice(0, string.length - 1))
   */

  if (string.length <= 1) {
    return string;
  }
  return (
    string[string.length - 1] + reverse(string.slice(0, string.length - 1))
  );
}

/* console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir' */

/**
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 */

function isPalindrome(string) {
  if (string.length === 1) {
    return true;
  }
  if (string.length === 2) {
    return string[0] === string[1];
  }
  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, string.length - 1));
  }
  return false;
}

/* console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false */

/**
 * Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
 */
function isOdd(val) {
  return val % 2 !== 0;
}
function someRecursive(array, callback) {
  if (array.length === 0) {
    return false;
  }
  if (callback(array[0])) {
    return true;
  }
  return someRecursive(array.slice(1, array.length), callback);
}

/* console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false */

/**
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */
function flatten(array) {
  /**
   * base case:
   *
   *
   */
  let newArray = [];

  function helper(arrayOne) {
    if (arrayOne.length === 0) {
      return;
    }
    if (/* arrayOne[0].length > 1 */ Array.isArray(arrayOne[0])) {
      helper(arrayOne[0].concat(arrayOne.slice(1, arrayOne.length)));
    } else {
      newArray.push(arrayOne[0]);
      helper(arrayOne.slice(1, arrayOne.length));
    }
  }
  helper(array);
  return newArray;
}
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
