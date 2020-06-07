//MI SOLUTION

// const multiplyBy = (num) => {
//   if (num % 2 === 0) {
//     return multiplyByTwo(num);
//   } else if (num % 10 === 0) {
//     return multiplyBy10(num);
//   } else {
//     return `Can't multiply:${num}, number must be divisible y 2 or 10 `;
//   }
// };

// function multiplyByTwo(num) {
//   return num * 2;
// }

// function multiplyByTen(num) {
//   return num * 10;
// }
// console.log(multiplyBy(3));
// console.log(multiplyByTen(10));

// HIS SOLUTION

// const multiplyBy = (num1) => {
//   return function multiplyByTwo(num2) {
//     return num1 * num2;
//   };
// };

// const multiplyByTwo = multiplyBy(2);
// console.log(multiplyByTwo(10));

//REFACTOR FOR CLEANER LOOK (ARROW FUNCTION)
const multiplyBy = (num1) => (num2) => num1 * num2;
console.log(multiplyBy(2)(5));
