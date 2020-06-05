/**
 * when we invoke a function we automatically
 * get THIS and ARGUMENTS
 */

/**WAYS TO CREATE AND CALL A FUNCTION */
/**YOU CAN INVOKE A FUNCTION USING .CALL() */

/**calling a function as a function */
function return1() {
  return 1;
}

console.log(return1());

/**calling a function as a method */
const functionMethod = {
  return2() {
    return 2;
  },
  otherSyntax3: function return3() {
    return 3;
  },
};
console.log(functionMethod.return2());
console.log(functionMethod.otherSyntax3());

/***using the function constructor */
const newFunction = new Function("return 4");
console.log(newFunction());
