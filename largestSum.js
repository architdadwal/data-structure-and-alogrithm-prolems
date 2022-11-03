//  [1,2,3,4,3,5,4,6,7,8]
// Count largest sum of consecutive Digits
// array is not sorted

// conditions
// num >array -> error message
// 10 -4+1 => 7 (total number of loops)

function findLargest(array, num) {
  if (num > array) {
    throw new Error(" num is not greater than array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      for (let j = 0; j < num; j++) {
        tmp = array[j];
      }
      if (tmp > max) {
        max = tmp;
      }
    }
  }
  return max;
}
const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log("result");
