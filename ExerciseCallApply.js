// Exercise: call(), apply()
// How would you implement this

const array = [1, 2, 3];
const array2 = [1];

function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

function getMaxNumber2(arr) {
  return Math.max.apply(null, arr);
}

console.log(getMaxNumber2(array));
// console.log(arrayResult);
