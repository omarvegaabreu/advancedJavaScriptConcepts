/**
 * 1.PURE FUNCTIONS HAVE NO SIDE EFFECTS
 * MEANING THE FUNCTION DOES NOT MODIFY
 * ANYTHING OUTSIDE ITSELF
 *
 * The problem with side effects, if you have global
 * variables different functions can modify its data,
 * which creates a lot of bugs.
 *
 * 2. GIVEN THE SAME INPUT HEY GIVE YOU THE SAME OUTPUT.
 * RE
 *
 * REFERENTIALLY TRANSPARENT: A function is referentially
 * transparent if it’s a pure function whose parameters
 * are immutable.
 * 
 * PURE FUNCTIONS, ARE EASY TO TEST, COMPOSE AND ELIMINATE
 * A LOT OF BUGS
 * 
 **** LOOKUP IMMUTABLE JS 
 To achieve this in JavaScript we use immutable-js to create 
 immutable data, and closures to make sure observers can’t introspect 
 our object and mutate its state
 */

/**example of referential transparency */

/**THE GOAL OF FUNCTIONAL PROGRAMMING SHOULD BE TO MINIMIZE SIDE EFFECTS
 * To isolate the side effects in certain part of your program
 * making it easier to debug
 *
 * You want to build programs with a lot of small pure functions,
 *
 * GIDE LINE TO CREATE A PERFECT FUNCTION
 * 1. Each function should do ONE TASK and ONE TASK ONLY.\
 * 2. All functions should return something (have a return
 * statement.)Because when we give it an input, we should
 * expect and output.
 * 3. Every function should be PURE.
 * 4. Every function should have no shared state with other
 * functions.
 * 5.IMMUTABLE STATE: What ever you state you get in the function,
 * you should always return a new copy of that output.
 * 6.COMPOSABLE
 * 7.PREDICTABLE: you should always know what the function will do.
 *
 *
 * IDEMPOTENCE: is that the function can be repeated many times
 * and you'll still end up with the same result. For example,
 * a function that sets the text value of an input is idempotent
 * - you can call it as many times as you want with the same value,
 * and it will still set the same value on the input, no matter
 * how many times you run the function.
 *
 * Difference Between Parallel and Distributed Computing
 * PARALLEL computing allows multiple processors (functions in this case)
 *  to execute tasks simultaneously while DISTRIBUTED COMPUTING divides
 * a single task between multiple computers (functions for this case)
 *  to achieve a common goal.
 *
 * IMPERATIVE VS DECLARATIVE:
 *
 * IMPERATIVE CODE: Imperative code is code that tells the machine, what to do
 * and how to do it. A computer is better at being imperative. */

for (let i = 0; i > 5; i++) {
  //imperative, more code same result as before
  console.log(i);
}

/* DECLARATIVE CODE: Tells the machine what do do, and what should happen.*/
[1, 2, 3, 4, 5].forEach((num) => {
  //less instruction let the machine do the heavy lifting
  console.log(num);
});
/* IMMUTABILITY IN FUNCTIONAL PROGRAMING: not changing the data, not changing the state
 * but instead making copies of the state, and returning a new state every time.
 *
 * HIGHER ORDER FUNCTION: Is a function that takes one or more functions as arguments or
 * returns a function as a result (a call back function)
 *
 *
 */

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num) {
  return num * 2;
}

const testReferentialTransparency = multiply(add(2, 2));
/**even though multiply is calling add(),
 * the add() function will always return the
 * same value given the same input
 */
console.log("referential transparency", testReferentialTransparency);

/**HOF */
const hof = () => {
  return () => {
    return 2 * 2;
  };
};
const printHOF = hof()();
console.log(printHOF);

/**CLOSURES: Are a mechanism for containing state.
 * these functions always remember state
 */

/**it modifies state out side the function */
const closure = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const startCount = closure();
console.log("closure", startCount());
console.log("closure", startCount());
console.log("closure", startCount());
console.log("closure", startCount());
/**the cool thing about closure is that you will never loose the data */

/**does not modify state outside the function */

const closure2 = () => {
  let count = 55;
  return (doesNotModifyState = () => {
    return count;
  });
};
console.log(closure2()());

/**
 * CURRYING: is the technique of translating the evaluation of a function that
 *take multiple argument, into evaluation a sequence of functions each with a
 *single arguments
 *
 **/
const multiplyCurried = (a) => (b) => a * b;
const multiplyBy5 = multiplyCurried(5);
console.log(multiplyBy5(10));

/**
 * PARTIAL APPLICATION:
 * A WAY FOR US TO PARTIALLY APPLY A FUNCTION, PROCESS OF PRODUCING A FUNCTION
 * WITH A SMALLER NUMBER OF PARAMETERS, BY TAKING A FUNCTION AND APPLYING
 * SOME OF THE PARAMETERS
 */

const addPartial = (a) => (b) => (c) => {
  return a + b + c;
};
/**with the function call only two parameters are added */
const addOne = addPartial.bind(null, 1);
console.log("add one", addOne()(2));
