// Exercise: call(), apply()
// How would you implement this

const num = [5, 55, 39, 800, 40, 77, 88, 36, 27, 87, 99];

const printNum = () => {
  return Math.max.apply(null, num);
};

console.log(printNum(num));

// const printNum = (arr) => {
//   return Math.max.apply(null, arr);
// };
// console.log(printNum(num));

// const printNum = (arr) => {
//   return Math.max.apply(null, arr);
// };
// console.log(printNum(num));

// const array = [1, 2, 3];
// const array2 = [1];

// function getMaxNumber(arr) {
//   return Math.max.apply(null, arr);
// }

// function getMaxNumber2(arr) {
//   return Math.max.apply(null, arr);
// }

// console.log(getMaxNumber2(array));
// console.log(arrayResult);
