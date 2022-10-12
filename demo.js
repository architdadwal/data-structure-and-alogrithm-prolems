// checking sum zero - problem 1
//[-5,-4,-3,-2,0,2,4,6,8] =>input
//[?,?]-> output
//[-4,4]

function getSumPairZero(array) {
  for (let number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
  }
}
const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

//time complexity = o(n^2) quadratic time complexity
// we can make this time compexity to linear

//given array is [-3,-2,-1,0,1,3,5]

function getSumPair(array) {
  for (let number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
  }
}
const sum = getSumPair([-3, -2, -1, 0, 1, 3, 5]);
console.log(sum);

//finding the pair with sum = 1
// array = [-5,-4,-3,-2,-1,0,1,2,3,4,5]

function getSumPairOne(array) {
  for (let number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 1) {
        return [number, array[j]];
      }
    }
  }
}
const oneSum = getSumPairOne([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
console.log(oneSum);
