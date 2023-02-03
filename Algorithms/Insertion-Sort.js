function insertionSort(array) {
  const arr = array.slice();
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }

  return arr;
}
// complexity:
// runtime: o(n^2)
// space: o(1)
console.log(insertionSort([13, 1, 3, 21, 4123]));
