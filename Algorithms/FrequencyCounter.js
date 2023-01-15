function same(values, results) {
  /**
   * declare return val
   * loop through values
   * let tempRes = value * value
   * check if tempRes inside results (loop)
   * => if inside results -> remove index from results
   * => if NOT inside results -> return val = false
   * return val
   */

  // intuitive solution
  /* for (let i = 0; i < values.length; i++) {
    let tempRes = values[i] * values[i];

    if (results.indexOf(tempRes) === -1) {
      return false;
    } else {
      results.splice(results.indexOf(tempRes), 1);
    }
  } 
  
  complexity: 
  1) runtime = O(n^2)
  2) space = O()
  */

  /**
   * check if both same length
   * declare map
   * loop through values and calculate  let tempRes = value[i]^2
   * check if tempRes is already a key inside map
   * if NOT => add tempRes as key to map with value 1
   * if YES => map[tempRes] + 1
   *
   * loop through results
   * check if map[results[i]] > 0
   * if YES => map[results[i]] - 1
   * if NO => return false
   *
   */
  if (values.length !== results.length) {
    return false;
  }

  const map = {};

  for (let i = 0; i < values.length; i++) {
    let tempRes = values[i] * values[i];
    if (map[tempRes]) {
      map[tempRes] += 1;
    } else {
      map[tempRes] = 1;
    }
  }

  for (let j = 0; j < results.length; j++) {
    if (map[results[j]] > 0) {
      map[results[j]]--;
    } else {
      return false;
    }
  }

  return true;
}

// runtime O(2n) => O(n)
// space O(n)

/* console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1])); */

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name forme dby rearranging the letters of another, such as cinema, formed from iceman.
function validAnagram(firstStr, secondStr) {
  /**
   * check if both same length
   *
   * questions: all in lowerCase letters? spaces?
   * for loop through firstStr
   * check if firstStr[i] is inside secondStr
   * if YES => secondStr remove indexOf(firstStr[i])
   * if NO => return false
   *
   * return true
   *
   * complexity:
   * runtime: O(n^2)
   * space:
   *
   */

  if (firstStr.length !== secondStr.length) {
    return false;
  }
  let secondStrArray = secondStr.split("");
  for (let i = 0; i < firstStr.length; i++) {
    if (secondStrArray.indexOf(firstStr[i]) > -1) {
      secondStrArray.splice(secondStrArray.indexOf(firstStr[i]), 1);
    } else {
      return false;
    }
  }

  /**
   * declare map object
   * check if length equal
   * loop through firstStr
   * check if firstStr[i] already inside map object
   * if YES => map[firstStr[i]]++
   * if NO => map[firstStr[i]] = 1
   *
   * loop through secondStr
   * check if map[secondStr[i]] > 0
   * if YES => map[secondStr[i]]--
   * if NO => return false
   */

  const map = {};

  if (firstStr.length !== secondStr.length) {
    return false;
  }

  for (let i = 0; i < firstStr.length; i++) {
    if (map[firstStr[i]]) {
      map[firstStr[i]]++;
    } else {
      map[firstStr[i]] = 1;
    }
  }

  for (let j = 0; j < secondStr.length; j++) {
    if (map[secondStr[j]] > 0) {
      map[secondStr[j]]--;
    } else {
      return false;
    }
  }

  return true;
}

/* console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
 */

/**
 * Write a function called console.log(sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
    console.log(sameFrequency(182,281) // true
console.log(sameFrequency(34,14) // false
console.log(sameFrequency(3589578, 5879385) // true
console.log(sameFrequency(22,222) // false
 */

function sameFrequency(num1, num2) {
  /**
   * questions: what if array1.length !== array2.length
   *
   *
   *
   * for(num1)
   *    -> for(num2)
   *        -> check if num1[i] === num2[j]
   *            -> if YES => remove num[i] and num2[j]
   *                          break;
   *              -> if NO => return false
   *
   * /////
   * if(num1.length !==  0 && num2.length 1== 0){
   *      return false
   * }
   *
   * return true
   *
   * complexity:
   * runtime: o(n^2)
   * space: o(1)
   *
   * ////////////////////////////////////
   * second solution
   * runtime complexity: o(n)
   * space complexity: o(n)
   *
   * let map = {}
   *
   * for(num1){
   * map[num1[i]] += 1
   * }
   *
   *
   * for(num2)
   *  map[num1[i]] -= 1
   *
   *
   * for (const property in map) {
   *  check if(property !== 0){
   * return false}
   * }
   *
   * return true
   */

  let map = {};
  let string1 = num1.toString();
  let string2 = num2.toString();

  for (let i = 0; i < string1.length; i++) {
    if (!map[string1[i]]) {
      map[string1[i]] = 1;
    } else {
      map[string1[i]] += 1;
    }
  }

  for (let j = 0; j < string2.length; j++) {
    map[string2[j]] -= 1;
  }
  for ([key, value] of Object.entries(map)) {
    if (value !== 0) {
      return false;
    }
  }
  /*  for (let s = 0; s < string1.length; s++) {
    if (map[string1[s]] !== 0) {
      return false;
    }
  } */
  return true;
}

/* console.log(sameFrequency(132, 321)); // true
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false */

/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * 
 * areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
 * 
 */
/**
 *
 * the arguments keyword as well as the ...arg (rest parameter) can be used to identify an infinit amount of arguments (they will be listed array like afterwards)
 */
function areThereDuplicates() {
  let collection = {};

  for (let i = 0; i < arguments.length; i++) {
    if (collection[arguments[i]]) {
      return true;
    }
    collection[arguments[i]] = 1;
  }

  return false;
}
function areThereDuplicates(...theArgs) {
  let collection = {};

  for (let i = 0; i < theArgs.length; i++) {
    if (collection[theArgs[i]]) {
      return true;
    }
    collection[theArgs[i]] = 1;
  }

  return false;
}
// using a set
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
