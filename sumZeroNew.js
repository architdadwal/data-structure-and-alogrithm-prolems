//checking sum zero- Problem 1
// [-5,-4,-3,-2,0,2,4,6,8] ->   Input
//[?,?] -> Output

//Another solution

function findSumPair(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
const final = findSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(final);

//trying with a diffeent array
//array = [-3,-2,-1,0,2,3]

function findPair(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const add = findPair([-3, -2, -1, 0, 2, 3]);
console.log(add);
