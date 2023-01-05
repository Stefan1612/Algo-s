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
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
