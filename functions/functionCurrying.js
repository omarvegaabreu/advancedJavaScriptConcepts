//function currying

function multiply(a, b) {
  return a * b;
}

/***
 * To use multiplication currying you can bind
 * THIS (in this case its the window object)
 * but you are still passing a parameter to the
 * function and able to add the parameter later
 */
const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(2)); //the answer will be 4
/** function currying will allow you to re-use a
 * function and add different
 * parameters.
 */
