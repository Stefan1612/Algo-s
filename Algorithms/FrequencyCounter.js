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

  let map = {};

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

  let map = {};

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

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
