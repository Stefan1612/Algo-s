/**
 * string "wowomgzomg" , substring "omg"
 * 
 * res = 2
 
 */

function findSubstringCount(longString, subString) {
  let counter = 0;
  let totalAmount = 0;

  for (let i = 0; i < longString.length; i++) {
    if (longString[i] === subString[counter]) {
      counter += 1;
      if (counter === subString.length) {
        totalAmount += 1;
        counter = 0;
      }
    } else {
      counter = 0;
    }
  }

  return totalAmount;
}

console.log(findSubstringCount("wowomgzomg", "omg"));
console.log(findSubstringCount("wwadadsawawdadawddadsda", "wd"));
console.log(
  findSubstringCount("wdahahwdnaiaaaajodwpijadiöokaaajowdpaädaaa", "aaa")
);

/**
 * naive solution with double loop
 *
 *
 */

function doubleLoop(longString, shortString) {
  let counter = 0;

  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < shortString.length; j++) {
      if (shortString[j] !== longString[i + j]) {
        break;
      }
      if (j === shortString.length - 1) {
        counter++;
        break;
      }
    }
  }
  return counter;
}

console.log(doubleLoop("wowomgzomg", "omg"));
console.log(doubleLoop("wwadadsawawdadawddadsda", "wd"));
console.log(doubleLoop("wdahahwdnaiaaaajodwpijadiöokaaajowdpaädaaa", "aaa"));
